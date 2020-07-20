"""
WSGI config for unqocninitapi project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/howto/deployment/wsgi/
"""
# 가상환경으로 django사용시 들어가야 하는 부분
import os, sys

path = os.path.abspath(__file__ + '/../..')
if path not in sys.path:
    sys.path.append(path)
#     가상환경으로 django사용시 들어가야 하는 부분

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'unqocninitapi.settings')

application = get_wsgi_application()
