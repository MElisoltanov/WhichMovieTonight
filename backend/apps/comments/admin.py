from django.contrib import admin
from .models import Comment


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('user', 'movie', 'text_preview', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('user__username', 'movie_title', 'text')
    date_hierarchy = 'created_at'
    ordering = ('-created_at',)
    readonly_fiels = ('created_at', 'updated_at')

    def text_preview(self, obj):
        return obj.text[:50] + '...' if len(obj.text) > 50 else obj.text
    text_preview.short_description = 'Commentaire'
