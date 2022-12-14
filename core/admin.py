from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext as _

from .models import (
    Spotlight,
    User,
    Job,
    # Jobs,
    # Qualification,
    # PreferredQualification,
    # Location,
    # Description
    )

class UserAdmin(BaseUserAdmin):
    ordering = ['id']
    list_display = ['email', 'name']
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal Info'), {'fields': ('name',)}),
        (
            _('Permissions'),
            {'fields': ('is_active', 'is_staff', 'is_superuser')}
        ),
        (_('Important Dates'), {'fields': ('last_login',)})
    )
    add_fieldsets = (
        ('None', {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2')
        }),
    )

admin.site.register(User, UserAdmin)
admin.site.register(Job)
# admin.site.register(Jobs)
# admin.site.register(Qualification)
# admin.site.register(PreferredQualification)
# admin.site.register(Description)
# admin.site.register(Location)
admin.site.register(Spotlight)