from django.db import models

# Create your models here.

gender = (
    (1, 'Male'),
    (2, 'Female'),
)


class TestUser(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(max_length=30)

    def __str__(self):
        return self.first_name


class Profile(models.Model):
    username = models.ForeignKey(TestUser, on_delete=models.CASCADE)
    address = models.CharField(max_length=30)
    phone_numbers = models.CharField(max_length=10)
    user_gender = models.IntegerField(choices=gender, default=1)

    def __str__(self):
        return self.username
