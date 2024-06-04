#!/bin/bash/


echo "Compiling client... "
npm run compile-app --prefix ./source/application/client/


echo "Building client... "
npm run build-app --prefix ./source/application/client/


echo "Starting PHP Server... "
php start.php