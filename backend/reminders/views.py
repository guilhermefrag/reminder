from django.shortcuts import render
from django.contrib.auth.models import User
from django.db import transaction
from user_manage.models import UserExtraFields
from user_manage.services.data_validation import email_validation
from django.contrib.auth import authenticate, login


from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from conf.settings import ADMIN_PASSWORD

from .serializers import UserSerializer
from django.db.models import QuerySet

@api_view(["POST"])
@transaction.atomic
def create_reminder(request):
    pass

