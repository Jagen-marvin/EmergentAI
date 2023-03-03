from django.http import HttpResponse;
from django.shortcuts import render
from django.core.mail import send_mail

def home(request):
    return render(request,'index.html', {})
    
def cervical(request):
    return render(request,'index-cervical.html',{})
    
def tuberculosis(request):
    return render(request,'index-tuberculosis.html',{})

def yogera(request):
    return render(request,'index-yogera.html',{})

def thanks(request):
    return render(request,'index-thanks.html',{})
    
def contact(request):
    if request.method == "post":
        message_name = request.POST['message-name']
        message_email = request.POST['message-email']
        message_subject = request.POST['message-subject']
        message_number = request.POST['message-number']
        message = request.POST['message']
        
        # send an email
        send_mail(
            'Message from' + message_name, # subject
            message, # message
            message_email, # from email
            ['info@emergentai.ug'], # to email
        )
        
        return render(request,'index-thanks.html',{})
      
    else:
        return render(request,'index-thanks.html',{})
        
