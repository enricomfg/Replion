"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[411],{51226:function(e){e.exports=JSON.parse('{"functions":[{"name":"GetData","desc":"Returns the Data table, will yield if the Data does not exist.","params":[],"returns":[{"desc":"","lua_type":"any"}],"function_type":"method","yields":true,"source":{"line":134,"path":"src/Client/init.lua"}},{"name":"OnUpdate","desc":"","params":[{"name":"path:","desc":"","lua_type":"{ string } | string"}],"returns":[{"desc":"","lua_type":"callback (...any) -> ()"},{"desc":"","lua_type":"Connection"}],"function_type":"method","errors":[{"lua_type":"Invalid callback","desc":"Occur when the callback isn\'t a function."}],"source":{"line":145,"path":"src/Client/init.lua"}},{"name":"Get","desc":"Returns the value at the given path.","params":[{"name":"path:","desc":"","lua_type":"{ string } | string"}],"returns":[{"desc":"","lua_type":"any"}],"function_type":"method","source":{"line":158,"path":"src/Client/init.lua"}},{"name":"Start","desc":"Starts the Replion, will request the Player Data from the server.\\nUntil this function is called, the Replion will not have any data.","params":[],"returns":[],"function_type":"method","source":{"line":180,"path":"src/Client/init.lua"}}],"properties":[{"name":"Data","desc":"The Player Data. Doesn\'t exist until you call Start the Replion.","lua_type":"any?","readonly":true,"source":{"line":51,"path":"src/Client/init.lua"}},{"name":"Action","desc":"","lua_type":"Action","tags":["Enums"],"readonly":true,"source":{"line":58,"path":"src/Client/init.lua"}}],"types":[],"name":"ReplionClient","desc":"","realm":["Client"],"source":{"line":63,"path":"src/Client/init.lua"}}')}}]);