# Generated by Django 4.0.6 on 2022-08-18 23:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_job_minimumqualifications_location_description'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='MinimumQualifications',
            new_name='Qualification',
        ),
    ]