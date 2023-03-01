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
    if requst.method == "post":
        message_name = request.post['message-name']
        message_email = request.post['message-email']
        message_subject = request.post['message-subject']
        message_number = request.post['message-number']
        message = request.post['message']
        
        # send an email
        send_mail(
        'Message from' + message_name, # subject
        message, # message
        message_email, # from email
        ['info@emergentai.ug','jagenmarvin4@gmail.com'], # to email
        
        )
        
        return render(request,'index-thanks.html',{})
      
     else:
        return render(request,'index-thanks.html',{})
        
