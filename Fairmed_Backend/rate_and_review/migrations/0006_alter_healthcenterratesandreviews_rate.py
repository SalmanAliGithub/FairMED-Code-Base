# Generated by Django 4.2.7 on 2023-12-28 13:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rate_and_review', '0005_healthcenteraveragerate_physicianaveragerate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='healthcenterratesandreviews',
            name='rate',
            field=models.DecimalField(decimal_places=4, max_digits=5),
        ),
    ]
