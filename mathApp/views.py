from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'index.html')

def training(request, difficulty):
    context = {'difficulty': difficulty}
    return render(request, 'trainingPage.html', context)