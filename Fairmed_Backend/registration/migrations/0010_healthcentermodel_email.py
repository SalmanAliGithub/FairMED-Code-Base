# Generated by Django 4.2.7 on 2024-01-03 06:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0009_alter_healthcentermodel_recent_reviews_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='healthcentermodel',
            name='email',
            field=models.EmailField(max_length=254, null=True),
        ),
    ]
