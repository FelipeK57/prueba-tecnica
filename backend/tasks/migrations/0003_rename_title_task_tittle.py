# Generated by Django 5.0.4 on 2024-08-24 21:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0002_task_date'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='title',
            new_name='tittle',
        ),
    ]
