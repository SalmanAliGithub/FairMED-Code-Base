# Generated by Django 4.2.7 on 2024-01-04 16:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0011_physicianmodel_hcid'),
    ]

    operations = [
        migrations.AddField(
            model_name='patientmodel',
            name='records',
            field=models.JSONField(null=True),
        ),
    ]
