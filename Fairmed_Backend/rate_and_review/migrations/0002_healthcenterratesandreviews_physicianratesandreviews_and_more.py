# Generated by Django 4.2.7 on 2023-12-28 06:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0006_healthcentermodel'),
        ('rate_and_review', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='HealthCenterRatesAndReviews',
            fields=[
                ('reviewId', models.AutoField(primary_key=True, serialize=False)),
                ('rate', models.DecimalField(decimal_places=4, max_digits=4)),
                ('review', models.TextField(max_length=400)),
                ('date_created', models.DateField(auto_now_add=True)),
                ('patientId', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='registration.patientmodel')),
                ('physicianId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='registration.healthcentermodel')),
            ],
        ),
        migrations.CreateModel(
            name='PhysicianRatesAndReviews',
            fields=[
                ('reviewId', models.AutoField(primary_key=True, serialize=False)),
                ('rate', models.DecimalField(decimal_places=4, max_digits=4)),
                ('review', models.TextField(max_length=400)),
                ('date_created', models.DateField(auto_now_add=True)),
                ('patientId', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='registration.patientmodel')),
                ('physicianId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='registration.physicianmodel')),
            ],
        ),
        migrations.DeleteModel(
            name='RatesAndReviewsModel',
        ),
    ]
