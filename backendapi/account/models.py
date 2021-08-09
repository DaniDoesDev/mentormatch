from django.db import models

class Mentor(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField(max_length=100, unique=True)
    company = models.CharField(max_length=30)
    job = models.CharField(max_length=30, null=True, blank=True)
    initial_num_mentee = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.name


class Mentee(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField(max_length=100, unique=True)
    interested_company = models.CharField(max_length=30)
    interested_job = models.CharField(max_length=30, null=True, blank=True)
    mentor_id = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.name

