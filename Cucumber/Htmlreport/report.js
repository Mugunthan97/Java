$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Amazon.feature");
formatter.feature({
  "name": "To Validate Login page in amazon",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To validate login page using invaid credencials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User in amazon home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User Enter invalid \"\u003cEmail\u003e\"login id",
  "keyword": "When "
});
formatter.step({
  "name": "User Click the continue button",
  "keyword": "And "
});
formatter.step({
  "name": "User enter invalid \"\u003cPassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ]
    },
    {
      "cells": [
        "java@gmail.com",
        "java@123"
      ]
    },
    {
      "cells": [
        "selenium@gmail.com",
        "selenium@123"
      ]
    },
    {
      "cells": [
        "framework@gmail.com",
        "frame@123"
      ]
    },
    {
      "cells": [
        "sql@gmail.com",
        "sql@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate login page using invaid credencials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User in amazon home page",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonLogin.user_in_amazon_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter invalid \"java@gmail.com\"login id",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonLogin.user_Enter_invalid_login_id(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click the continue button",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonLogin.user_Click_the_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter invalid \"java@123\" password",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonLogin.user_enter_invalid_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonLogin.user_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login page using invaid credencials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User in amazon home page",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonLogin.user_in_amazon_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter invalid \"selenium@gmail.com\"login id",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonLogin.user_Enter_invalid_login_id(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click the continue button",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonLogin.user_Click_the_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter invalid \"selenium@123\" password",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonLogin.user_enter_invalid_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonLogin.user_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login page using invaid credencials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User in amazon home page",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonLogin.user_in_amazon_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter invalid \"framework@gmail.com\"login id",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonLogin.user_Enter_invalid_login_id(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click the continue button",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonLogin.user_Click_the_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter invalid \"frame@123\" password",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonLogin.user_enter_invalid_password(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#ap_password\"}\n  (Session info: chrome\u003d95.0.4638.54)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MUGUNTHAN\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 95.0.4638.54, chrome: {chromedriverVersion: 95.0.4638.17 (a9d0719444d4b..., userDataDir: C:\\Users\\MUGUNT~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:50972}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b08196e850fe1b2d852d5e468baf4d5e\n*** Element info: {Using\u003did, value\u003dap_password}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.stepdefination.AmazonLogin.user_enter_invalid_password(AmazonLogin.java:27)\r\n\tat ✽.User enter invalid \"frame@123\" password(file:src/test/resources/Features/Amazon.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonLogin.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login page using invaid credencials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User in amazon home page",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonLogin.user_in_amazon_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter invalid \"sql@gmail.com\"login id",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonLogin.user_Enter_invalid_login_id(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click the continue button",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonLogin.user_Click_the_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter invalid \"sql@123\" password",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonLogin.user_enter_invalid_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonLogin.user_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/login.feature");
formatter.feature({
  "name": "To validate Login Functionality in Facebook Application",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefination.user_is_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate valid username and invalid password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user enter the valid username",
  "rows": [
    {
      "cells": [
        "java@gmail.com",
        "selenium@gmail.com",
        "framework@gmail.com",
        "sql@gmail.com"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefination.user_enter_the_valid_username(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter invalid password",
  "rows": [
    {
      "cells": [
        "123465985",
        "basjsbh",
        "knsbnnvkboi",
        "hfuefgiohoingho"
      ]
    },
    {
      "cells": [
        "dfoiflg",
        "kjdcbkjhf",
        "djbbof",
        "ckjf"
      ]
    },
    {
      "cells": [
        "jbfkjbb",
        "kdbbfbg",
        "fjbjkbkj",
        "n"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefination.user_enter_invalid_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click submit button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefination.user_click_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_quit_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefination.user_is_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate invalid username and valid password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user enter the invalid username",
  "rows": [
    {
      "cells": [
        "email1",
        "selenium@gmail.com"
      ]
    },
    {
      "cells": [
        "email2",
        "java@gmail.com"
      ]
    },
    {
      "cells": [
        "email3",
        "sql@gmail.com"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefination.user_enter_the_invalid_username(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid password",
  "rows": [
    {
      "cells": [
        "password1",
        "password2",
        "password3"
      ]
    },
    {
      "cells": [
        "dfoiflg",
        "kjdcbkjhf",
        "djbbof"
      ]
    },
    {
      "cells": [
        "jbfkjbb",
        "kdbbfbg",
        "fjbjkbkj"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefination.user_enter_valid_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click submit button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefination.user_click_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_quit_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/fblogin.feature");
formatter.feature({
  "name": "To Validate Login page in fb application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate invalid username and invalid password",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To open browswer and launch fb url",
  "keyword": "Given "
});
formatter.match({
  "location": "Fblogin.to_open_browswer_and_launch_fb_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass invalid username",
  "keyword": "When "
});
formatter.match({
  "location": "Fblogin.to_pass_invalid_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass invalid password",
  "keyword": "And "
});
formatter.match({
  "location": "Fblogin.to_pass_invalid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login btn",
  "keyword": "And "
});
formatter.match({
  "location": "Fblogin.user_click_login_btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User take screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "Fblogin.user_take_screenshot()"
});
formatter.result({
  "error_message": "java.io.IOException: Destination \u0027E:\\Eclipse\\Cucumber\\Snaps\u0027 exists but is a directory\r\n\tat org.apache.commons.io.FileUtils.doCopyFile(FileUtils.java:1386)\r\n\tat org.apache.commons.io.FileUtils.copyFile(FileUtils.java:885)\r\n\tat org.apache.commons.io.FileUtils.copyFile(FileUtils.java:835)\r\n\tat org.apache.commons.io.FileUtils.copyFile(FileUtils.java:802)\r\n\tat org.stepdefination.Fblogin.user_take_screenshot(Fblogin.java:52)\r\n\tat ✽.User take screenshot(file:src/test/resources/fblogin.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonLogin.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
});