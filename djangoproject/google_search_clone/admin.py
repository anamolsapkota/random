from django.contrib import admin

# Register your models here.
from google_search_clone.models import TestUser, Profile

admin.site.register(TestUser)
admin.site.register(Profile)