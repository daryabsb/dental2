# Generated by Django 4.0.6 on 2022-08-18 23:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_rename_minimumqualifications_qualification'),
    ]

    operations = [
        migrations.RenameField(
            model_name='job',
            old_name='date_added',
            new_name='dateAdded',
        ),
    ]
