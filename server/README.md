

数据库

mongodb

官方介绍

>	MongoDB（来自于英文单词“Humongous”，中文含义为“庞大”）是可以应用于各种规模的企业、各个行业以及各类应用程序的开源数据库。作为一个适用于敏捷开发的数据库，MongoDB的数据模式可以随着应用程序的发展而灵活地更新。与此同时，它也为开发人员 提供了传统数据库的功能：二级索引，完整的查询系统以及严格一致性等等。 MongoDB能够使企业更加具有敏捷性和可扩展性，各种规模的企业都可以通过使用MongoDB来创建新的应用，提高与客户之间的工作效率，加快产品上市时间，以及降低企业成本。

MongoDB 是一个基于分布式文件存储的数据库。由 C++ 语言编写。旨在为 WEB 应用提供可扩展的高性能数据存储解决方案。

MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。

[官方的mongoDB安装](https://docs.mongodb.com/manual/administration/install-community/)

OS X  为例：

安装的mongoDB版本为`3.4.1`

由于使用`Homebrew`依赖管理器有问题，果断放弃这种方式的安装。

采用手动安装模式，即源码安装

步骤如下：

1. 下载源码到本地

```
curl -O https://fastdl.mongodb.org/osx/mongodb-osx-ssl-x86_64-3.4.1.tgz
```

2. 解压文件

```
tar -zxvf mongodb-osx-ssl-x86_64-3.4.1.tgz
```

3. 将解压后的文件内容，拷贝到需要的指定目录(例如：~/mongodb)

```
// 需先创建目录
mkdir ~/mongodb

cp -R -n mongodb-osx-ssl-x86_64-3.4.1/   ~/mongodb
```

其实这步骤可以省略，只要在想要存放的目录下去下载源码，并解压，需要的话再修改下解压后的目录名

还需注意，新创建的目录需要有用户权限，

4. 配置环境变量,这步骤也可省略，只要你不嫌执行命令麻烦

在~/.bashrc文件中添加以下内容：

```
export PATH="$PATH:<your-mongodb-directory>"
```

这是的`<your-mongodb-directory>`就是上面的`~/mongodb`

5. 通过命令启动mongodb

在执行命令前，还需添加，存放数据的目录

```
mkdir /data/db    # 如果不是管理员身份操作，需使用 sudo
chown -R <当前的用户> /data
```
然后执行启动命令

```
mongod
```

执行命令后会看到它启动的端口,在浏览器中输入`127.0.0.1:27017`，会看到以下一段话，告诉你正在尝试连接mongodb数据库

>	It looks like you are trying to access MongoDB over HTTP on the native driver port.


/usr/local/


[mongoose](http://www.nodeclass.com/api/mongoose.html)

node中对mongodb数据库的连接，操作。


## 使用到的其他模块

koa-router

koa-views

koa-static

koa-parsebody

## 参考资料

[koa 2 入门](https://cnodejs.org/topic/5709959abc564eaf3c6a48c8)

blog文[深入浅出koa](https://cnodejs.org/topic/56e688a983cbb63b6d120300)



