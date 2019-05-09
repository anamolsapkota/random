from django.contrib import admin

# Register your models here.
from duckapp.models import TestUser, Profile

admin.site.register(TestUser)
admin.site.register(Profile)


