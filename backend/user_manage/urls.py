from django.urls import path
from user_manage.views import sign_up

urlpatterns = [
    path('signup/', sign_up, name="sign_up"),
    # path('signin/', sign_in, name="sign")
]
