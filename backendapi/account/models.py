from django.db import models

class Mentor(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(max_length=100, unique=True)
    company = models.CharField(max_length=30)
    job = models.CharField(max_length=30)

class Mentee(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(max_length=100, unique=True)
    interested_company = models.CharField(max_length=30)
    interested_job = models.CharField(max_length=30)
