from django.shortcuts import render


# Create your views here.
def duck_search(request):
    return render(request, "duckduckgo.html")
