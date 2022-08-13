from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic.base import TemplateView
# Create your views here.

class IndexTemplateView(TemplateView):
    template_name = "index.html"

# def index(request):

#     context = {'What is:': "IT is nothing"}
#     return render(request, 'index.html', context)
