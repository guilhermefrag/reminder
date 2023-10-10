from uuid import UUID
from django.db import models

# Create your models here.
class Donation(models.Model):
    uuid = models.UUIDField(primary_key=True, default=UUID.uuid4, editable=False)
    title = models.CharField(max_length=100)
    description = models.IntegerField()
    url = models.CharField(max_length=1000)