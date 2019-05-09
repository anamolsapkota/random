from django.shortcuts import render


# from django.views.generic import TemplateView

# Create your views here.
# class AboutView(TemplateView):
#     template_name = "index.html"

def google_search(request):
    return render(request, "google.html")
