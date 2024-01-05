"""
URL configuration for Fairmed_Backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include


'''
You can use this list to refer to the endpoints of the API created in this project!
'''

    # /physicians_reviews_rates/                      ----->      To get the list of Physicians with 
    #                                                              their averege rate and recent reviews

    # /physicians_reviews_rates/<int:physicianId>/'   ----->      To get the detail of a physician
    #                                                               by specifying their id!

    # /hcs_reviews_rates/                             ----->      To get the list of healthcenters with 
    #                                                               their average rate and recent reviews

    # /hcs_reviews_rates/<int:hcId>/                  ----->      To get the detail of a healthcenter
    #                                                               by specifying their id!

    # /patient_profile/<int:user_id>/                 ----->      To access the personal information of 
    #                                                               a patient(Authorization required)

    # /physician_profile/<int:user_id>/               ----->      To access the personal information of 
    #                                                               a physician(Authorization required)

    # /register/patient/'                             ----->      To register a patient to the system

    # /register/physician/                            ----->      To register a physician to the system

    # /login/patient/                                 ----->      To login a registered patient into the system

    # /login/physician/                               ----->      To login a registered physician into the system

    # /records/create/                                ----->      To create medical record of a patient(Authorization required)

    # /records/view/                                  ----->      To browse past medical record of a patient

    # /review/                                        ----->      To rate and write review on either physician or healthcenter



urlpatterns = [
    
    path('admin/', admin.site.urls),
    path('', include('home.urls')),

    path('register/', include('registration.urls')),
    path('login/', include('login.urls')),
    path('records/', include('medical_record.urls')),

    # path('comment', include('comment.urls')),
    path('review/', include('rate_and_review.urls')),


    # path('find', include('search_engine.urls')),
]
