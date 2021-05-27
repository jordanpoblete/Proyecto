from django.shortcuts import render

# Create your views here.
def home(request):
    contexto = {
        'nombre':'Denisse',
        'edad':'19'
    }
    return render(request,'core/home.html') 