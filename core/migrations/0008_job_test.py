# Generated by Django 4.0.6 on 2022-08-31 14:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0007_spotlight'),
    ]

    operations = [
        migrations.AddField(
            model_name='job',
            name='test',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]