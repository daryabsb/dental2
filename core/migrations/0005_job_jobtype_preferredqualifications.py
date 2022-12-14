# Generated by Django 4.0.6 on 2022-08-18 23:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_rename_date_added_job_dateadded'),
    ]

    operations = [
        migrations.AddField(
            model_name='job',
            name='jobType',
            field=models.CharField(default='PhD', max_length=50),
            preserve_default=False,
        ),
        migrations.CreateModel(
            name='PreferredQualifications',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('qualification', models.CharField(max_length=200)),
                ('job', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='preferredQualifications', to='core.job')),
            ],
        ),
    ]
