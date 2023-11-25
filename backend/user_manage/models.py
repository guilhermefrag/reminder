import uuid

from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.utils.crypto import get_random_string

# Create your models here.
class UserExtraFields(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    auth_token = models.CharField(max_length=40, blank=True, null=True)

@receiver(pre_save, sender=UserExtraFields)
def generate_auth_token(sender, instance, **kwargs):
    # Generate a random auth token using Django's get_random_string
    if not instance.auth_token:
        instance.auth_token = get_random_string(length=40)
