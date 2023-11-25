from django.urls import path
from user_manage.views import sign_up, sign_in

urlpatterns = [
    path('signup/', sign_up, name="sign_up"),
    path('signin/', sign_in, name="sign_in")
]
