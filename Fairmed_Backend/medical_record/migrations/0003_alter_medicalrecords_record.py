# Generated by Django 4.2.7 on 2024-01-01 13:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('medical_record', '0002_alter_medicalrecords_record'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medicalrecords',
            name='record',
            field=models.TextField(null=True),
        ),
    ]