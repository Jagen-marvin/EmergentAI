from django.http import HttpResponse;
from django.shortcuts import render

def home(request):
    return render(request,'index.html', {})
    
def cervical(request):
    return render(request,'index-cervical.html',{})
    
def tuberculosis(request):
    return render(request,'index-tuberculosis.html',{})

def yogera(request):
    return render(request,'index-yogera.html',{})
    