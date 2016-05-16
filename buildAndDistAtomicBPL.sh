echo 'Building Atomic Blueprint Library'
cd atomic-blueprintLib
npm run build
cd ..

echo 'Copying Atomic Blueprint Library to example projects'
# Copy the blueprint lib
cp atomic-blueprintLib/dist/Resources/Modules/atomic-blueprintlib.bundle.js simple_blueprint_test/Resources/Modules
cp atomic-blueprintLib/dist/Resources/Modules/atomic-blueprintlib.bundle.js simple_es6_blueprint_test/Resources/Modules
cp atomic-blueprintLib/dist/Resources/Modules/atomic-blueprintlib.bundle.js simple_ts_blueprint_test/Resources/Modules
cp atomic-blueprintLib/dist/Resources/Modules/atomic-blueprintlib.bundle.js space_shooter_blueprint/Resources/Modules
cp atomic-blueprintLib/dist/Resources/Modules/atomic-blueprintlib.bundle.js space_shooter_es6_blueprint/Resources/Modules

# copy the plugin
cp -R atomic-blueprintLib/dist/Resources/EditorData simple_blueprint_test/Resources
cp -R atomic-blueprintLib/dist/Resources/EditorData simple_es6_blueprint_test/Resources
cp -R atomic-blueprintLib/dist/Resources/EditorData simple_ts_blueprint_test/Resources
cp -R atomic-blueprintLib/dist/Resources/EditorData space_shooter_blueprint/Resources
cp -R atomic-blueprintLib/dist/Resources/EditorData space_shooter_es6_blueprint/Resources

# Typescript
cp -R atomic-blueprintLib/dist/Resources/typings simple_ts_blueprint_test/Resources/typings/atomic-blueprintlib
