var yamlwriter = require('./yamlw');

//var set ="image.repository='janisonhackregistry.azurecr.io/$(Build.Repository.Name)',image.tag='$(Build.BuildNumber)',outputs.modelfolder='/mnt/azure/$(Build.BuildNumber)',env.BLOB_STORAGE_ACCOUNT='$(BLOB_STORAGE_ACCOUNT)',env.BLOB_STORAGE_KEY='$(BLOB_STORAGE_KEY)', env.BLOB_STORAGE_CONTAINER='$(BLOB_STORAGE_CONTAINER)',env.BLOB_STORAGE_CSV_FOLDER='$(BLOB_STORAGE_CSV_FOLDER)',env.TENANTID='$(TENANTID)'";

var set="ver='someting',some-thing='foo'"

var result = yamlwriter("samples/config.json", true, set, true);
console.log(result);
