module.exports = {
    
    // passport for dashboard
    'auth.google'                   : 'login.google',
    
    // models    
    'model.users'      : 'pg-models/users.model',
    
    //schemas
    'schema.twittercontent'         : 'buzz-model/schemas/twitter.content.schema',
    
    // apis
    'api.twitter.task'              : 'api/twitter.task.api',
    'api.twitter.activities'        : 'api/twitter.activities.api',
    'api.users'                     : 'api/users.api',        
    
    
    // controllers
    'ctrl.twitter.task'             : 'controllers/twitter.task.ctrl',
    'ctrl.twitter.activities'       : 'controllers/twitter.activities.ctrl', 
    'ctrl.users'                    : 'controllers/users.ctrl', 

        
    // utils
    'utils.response'                : 'utils/response.utils',
    
    // misc  
    'routes'                        : 'routes',
    'config'                        : 'config/environment',    

        
    
};