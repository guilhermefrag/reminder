from django.shortcuts import render
from django.contrib.auth.models import User
from django.db import transaction
from user_manage.services.data_validation import email_validation

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from conf.settings import ADMIN_PASSWORD

from .serializers import UserSerializer


# Create your views here.
@api_view(["POST"])
@transaction.atomic
def sign_up(request):
    try:
        username = request.data.get("username")
        password = request.data.get("password")
        email = request.data.get("email")
        admin_password = request.data.get("adminPassword")

        if admin_password != ADMIN_PASSWORD:
            raise ValueError("You are not authorized to create a new user.")

        if not username or not password:
            raise ValueError(
                "You must provide a username and password to create a new user."
            )

        if not email_validation(email):
            raise ValueError()
        
        if User.objects.filter(username=username).exists():
            raise ValueError("A user with this username already exists.")

        user = User.objects.create_user(
            username=username, password=password, email=email
        )
        
        user_serialized = UserSerializer(user)

        return Response(user_serialized.data)
    except ValueError as error:
        transaction.set_rollback(True)
        return Response(
            {"error": str(error)},
            status=status.HTTP_400_BAD_REQUEST,
        )
    except TypeError as error:
        transaction.set_rollback(True)
        return Response(
            {"error": str(error)},
            status=status.HTTP_400_BAD_REQUEST,
        )
