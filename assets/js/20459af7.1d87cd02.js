"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2354],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(4137));const r={},i="Installation",s={unversionedId:"administration/installation",id:"administration/installation",title:"Installation",description:"Dispatch relies on multiple services to work, which are all orchestrated by Docker Compose.",source:"@site/docs/administration/installation.mdx",sourceDirName:"administration",slug:"/administration/installation",permalink:"/dispatch/docs/administration/installation",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/master/docs/docs/administration/installation.mdx",tags:[],version:"current",frontMatter:{},sidebar:"adminSidebar",previous:{title:"Workflows",permalink:"/dispatch/docs/administration/incident/workflow"},next:{title:"Knowledge",permalink:"/dispatch/docs/administration/knowledge/"}},l={},p=[{value:"Requirements",id:"requirements",level:3},{value:"Installing Dispatch Server",id:"installing-dispatch-server",level:2},{value:"The &quot;first&quot; user problem",id:"the-first-user-problem",level:3},{value:"Going to Production",id:"going-to-production",level:2},{value:"Basics",id:"basics",level:3},{value:"Credential Management",id:"credential-management",level:3},{value:"Authentication",id:"authentication",level:3},{value:"TLS/SSL",id:"tlsssl",level:3},{value:"Nginx",id:"nginx",level:4}],c={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Dispatch relies on multiple services to work, which are all orchestrated by ",(0,o.kt)("inlineCode",{parentName:"p"},"Docker Compose"),"."),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")," 17.05.0+"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"Docker Compose")," 1.19.0+"),(0,o.kt)("li",{parentName:"ul"},"A dedicated ","(","sub",")","domain to host Dispatch on ","(","for example, dispatch.yourcompany.com",")","."),(0,o.kt)("li",{parentName:"ul"},"At least 2400MB memory"),(0,o.kt)("li",{parentName:"ul"},"2 CPU Cores")),(0,o.kt)("h2",{id:"installing-dispatch-server"},"Installing Dispatch Server"),(0,o.kt)("p",null,"We strongly recommend using Docker for installing Dispatch and all its services. If you need to do something custom, you can use this repository as the basis of your setup. If you do not wish to use the Docker images we provide, you can still find Dispatch on PyPI; however, we don't recommend that method. You'll need to work your way back from the main Dispatch image. It is not too hard, but you are likely to spend a lot more time and hit some bumps."),(0,o.kt)("p",null,"To install Dispatch from the repository, clone the repository locally:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Netflix/dispatch-docker.git\n")),(0,o.kt)("p",null,"Before starting the installation, we strongly recommend you check out ",(0,o.kt)("a",{parentName:"p",href:"/dispatch/docs/administration/server"},"how to configure your Dispatch instance")," as you'd need to rebuild your images ","(",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose build"),")"," if you want to change your configuration settings. You may copy and edit the example configs provided in the repository. If none exists, the install script will use these examples as actual configurations."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Note: Dispatch will not start without at least a few required configuration variables. See the example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Netflix/dispatch/blob/latest/docker/.env.example"},".env")," configuration file.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Note: Dispatch does not contain any data by default. For evaluation purposes, we do provide an example data set located ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Netflix/dispatch/blob/master/data/dispatch-sample-data.dump"},"here"),". For instructions on how to restore this data, see ",(0,o.kt)("a",{parentName:"p",href:"/dispatch/docs/administration/cli"},"here"),".")),(0,o.kt)("p",null,"To start, run the install script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./install.sh\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Note: The ",(0,o.kt)("inlineCode",{parentName:"p"},"core")," Docker service is not needed once the ",(0,o.kt)("inlineCode",{parentName:"p"},"web")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"schedule")," services, which depend on it, are built.")),(0,o.kt)("h3",{id:"the-first-user-problem"},'The "first" user problem'),(0,o.kt)("p",null,"For any new Dispatch installation, new users are expected to register themselves via the ",(0,o.kt)("inlineCode",{parentName:"p"},"/auth/register"),' endpoint in the Dispatch UI. By default, users registering via this method are granted regular "user" permissions within Dispatch. There is no direct way through the UI to allow a user to obtain an "Owner" role (as no other Owners exist to grant them access).'),(0,o.kt)("p",null,"For these users, we have a CLI command that allows users to be granted the role of their choosing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it dispatch_web_1 bash\ndispatch user update --role Owner --organization <name-of-the-organization> <email-address-of-registered-user>\n")),(0,o.kt)("p",null,'The default organization name in the sample data file is "default".'),(0,o.kt)("p",null,"After one owner user has been established, they can grant this role to others via the UI."),(0,o.kt)("h2",{id:"going-to-production"},"Going to Production"),(0,o.kt)("p",null,"Before you deploy Dispatch to production, there are a few considerations and steps that should be taken."),(0,o.kt)("h3",{id:"basics"},"Basics"),(0,o.kt)("p",null,"Because of the sensitivity of the information stored and maintained by Dispatch. You must follow standard host hardening practices:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run Dispatch with a limited user"),(0,o.kt)("li",{parentName:"ul"},"Disabled any unneeded services"),(0,o.kt)("li",{parentName:"ul"},"Enable remote logging"),(0,o.kt)("li",{parentName:"ul"},"Restrict access to the host")),(0,o.kt)("h3",{id:"credential-management"},"Credential Management"),(0,o.kt)("p",null,"Dispatch plugins require API tokens to communicate with third-party resources. These tokens are stored in either an environment variable or in the Dispatch ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("p",null,"By default, these strings are in plain text, but Dispatch does provide hooks that allow for these credentials to be decrypted on server start. See the ",(0,o.kt)("a",{parentName:"p",href:"/dispatch/docs/administration/server#general"},"Secret Provider")," configuration option."),(0,o.kt)("h3",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,'Dispatch provides a "Basic" authentication provider that controls access via a username and password combination to get going quickly. By default, this provider allows for ',(0,o.kt)("strong",{parentName:"p"},"open registration"),", which means that anyone will be able to create a Dispatch account if they have network access to your server."),(0,o.kt)("p",null,'Dispatch provides a "PKCE" authentication method to integrate existing and more robust SSO solutions for more robust authentication. See the ',(0,o.kt)("a",{parentName:"p",href:"/dispatch/docs/administration/server#authentication"},"Authentication Provider")),(0,o.kt)("h3",{id:"tlsssl"},"TLS/SSL"),(0,o.kt)("h4",{id:"nginx"},"Nginx"),(0,o.kt)("p",null,"Nginx is a popular choice to serve a Python project:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It\u2019s fast."),(0,o.kt)("li",{parentName:"ul"},"It\u2019s lightweight."),(0,o.kt)("li",{parentName:"ul"},"Configuration files are simple.")),(0,o.kt)("p",null,"Nginx doesn\u2019t run any Python process; it only serves requests from outside to the Python server."),(0,o.kt)("p",null,"Therefore, there are two steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run the Python process."),(0,o.kt)("li",{parentName:"ul"},"Run Nginx.")),(0,o.kt)("p",null,"You will benefit from having:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The possibility to have several projects listening to the port 80;"),(0,o.kt)("li",{parentName:"ul"},"Your web site processes won\u2019t run with admin rights, even if \u2013the user doesn\u2019t work on your OS;\n-The ability to manage a Python process without touching Nginx or the other processes. It\u2019s convenient for updates.")),(0,o.kt)("p",null,"You must create an Nginx configuration file for Dispatch. On GNU/Linux, they usually go into ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d/"),". Name it ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch.conf"),"."),(0,o.kt)("p",null,"proxy_pass passes the external request to the Python process. The port must match the one used by the Dispatch process."),(0,o.kt)("p",null,"You can make some adjustments to get a better user experience:"),(0,o.kt)("p",null,'server_tokens off;\nadd_header X-Frame-Options DENY;\nadd_header X-Content-Type-Options nosniff;\nadd_header X-XSS-Protection "1; mode=block";'),(0,o.kt)("p",null,"server {\nlisten 80;\nreturn 301 https://$host$request_uri;\n}"),(0,o.kt)("p",null,"server {\nlisten 443;\naccess_log /var/log/nginx/log/dispatch.access.log;\nerror_log /var/log/nginx/log/dispatch.error.log;"),(0,o.kt)("p",null,"location /api {\nproxy_pass ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:8000"},"http://127.0.0.1:8000"),";\nproxy_next_upstream error timeout invalid_header http_500 http_502 http_503 http_504;\nproxy_redirect off;\nproxy_buffering off;\nproxy_set_header Host $host;\nproxy_set_header X-Real-IP $remote_addr;\nproxy_set_header X-Forwarded-For \\$proxy_add_x_forwarded_for;\n}"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"location / {\n    root /path/to/dispatch/static/dist;\n    include mime.types;\n    index index.html;\n}\n")),(0,o.kt)("p",null,"}\nNginx will serve the favicon and static files, which it is much better at than python."),(0,o.kt)("p",null,"We recommended that you deploy TLS when deploying Dispatch. It may be obvious given Dispatch\u2019s purpose, but the sensitive nature of Dispatch and what it controls makes this essential. A sample config for Dispatch that also terminates TLS:"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Some paths will have to be adjusted based on where you have chosen to install Dispatch.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"server_tokens off;\nadd_header X-Frame-Options DENY;\nadd_header X-Content-Type-Options nosniff;\nadd_header X-XSS-Protection \"1; mode=block\";\n\nserver {\nlisten 80;\nreturn 301 https://$host$request_uri;\n}\n\nserver {\nlisten 443;\naccess_log /var/log/nginx/log/dispatch.access.log;\nerror_log /var/log/nginx/log/dispatch.error.log;\n\n# certs sent to the client in SERVER HELLO are concatenated in ssl_certificate\n\nssl_certificate /path/to/signed_cert_plus_intermediates;\nssl_certificate_key /path/to/private_key;\nssl_session_timeout 1d;\nssl_session_cache shared:SSL:50m;\n\n# Diffie-Hellman parameter for DHE cipher suites, recommended 2048 bits\n\nssl_dhparam /path/to/dhparam.pem;\n\n# modern configuration. tweak to your needs.\n\nssl_protocols TLSv1.1 TLSv1.2;\nssl_ciphers 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK';\nssl_prefer_server_ciphers on;\n\n# HSTS (ngx_http_headers_module is required) (15768000 seconds = 6 months)\n\nadd_header Strict-Transport-Security max-age=15768000;\n\n# OCSP Stapling ---\n\n# fetch OCSP records from URL in ssl_certificate and cache them\n\nssl_stapling on;\nssl_stapling_verify on;\n\n## verify chain of trust of OCSP response using Root CA and Intermediate certs\n\nssl_trusted_certificate /path/to/root_CA_cert_plus_intermediates;\n\nresolver <IP DNS resolver>;\n\nlocation /api {\nproxy_pass http://127.0.0.1:8000;\nproxy_next_upstream error timeout invalid_header http_500 http_502 http_503 http_504;\nproxy_redirect off;\nproxy_buffering off;\nproxy_set_header Host $host;\n        proxy_set_header        X-Real-IP       $remote_addr;\nproxy_set_header X-Forwarded-For \\$proxy_add_x_forwarded_for;\n}\n\n    location / {\n        root /path/to/dispatch/static/dist;\n        include mime.types;\n        index index.html;\n    }\n\n}\n")),(0,o.kt)("p",null,"Apache\nAn example apache config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<VirtualHost \\*:443>\n...\nSSLEngine on\nSSLCertificateFile /path/to/signed_certificate\nSSLCertificateChainFile /path/to/intermediate_certificate\nSSLCertificateKeyFile /path/to/private/key\nSSLCACertificateFile /path/to/all_ca_certs\n\n    # intermediate configuration, tweak to your needs\n    SSLProtocol             all -SSLv2 -SSLv3\n    SSLCipherSuite          ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:AES:CAMELLIA:DES-CBC3-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!aECDH:!EDH-DSS-DES-CBC3-SHA:!EDH-RSA-DES-CBC3-SHA:!KRB5-DES-CBC3-SHA\n    SSLHonorCipherOrder     on\n\n    # HSTS (mod_headers is required) (15768000 seconds = 6 months)\n    Header always set Strict-Transport-Security "max-age=15768000"\n    ...\n\n# Set the dispatch DocumentRoot to static/dist\n\nDocumentRoot /www/dispatch/dispatch/static/dist\n\n# Uncomment to force http 1.0 connections to proxy\n\n# SetEnv force-proxy-request-1.0 1\n\n#Don\'t keep proxy connections alive\nSetEnv proxy-nokeepalive 1\n\n# Only need to do reverse proxy\n\nProxyRequests Off\n\n# Proxy requests to the API to the dispatch service (and sanitize redirects from it)\n\nProxyPass "/api" "http://127.0.0.1:8000/api"\nProxyPassReverse "/api" "http://127.0.0.1:8000/api"\n\n</VirtualHost>\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The above config is somewhat incomplete. If you have a working apache config, please let us know!")),(0,o.kt)("p",null,"Also included in the configurations above are several best practices when it comes to deploying TLS. Things like enabling HSTS, disabling vulnerable ciphers are all excellent ideas for deploying Dispatch into a production environment."),(0,o.kt)("p",null,"For more SSL configuration options see: ",(0,o.kt)("a",{parentName:"p",href:"https://mozilla.github.io/server-side-tls/ssl-config-generator/"},"Mozilla SSL Configuration Generator")))}h.isMDXComponent=!0}}]);