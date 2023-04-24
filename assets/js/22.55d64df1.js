(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{365:function(s,n,a){"use strict";a.r(n);var e=a(6),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"客户端工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#客户端工具"}},[s._v("#")]),s._v(" 客户端工具")]),s._v(" "),n("p",[s._v("https://github.com/qishibo/AnotherRedisDesktopManager")]),s._v(" "),n("h1",{attrs:{id:"安装部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装部署"}},[s._v("#")]),s._v(" 安装部署")]),s._v(" "),n("h2",{attrs:{id:"手动方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#手动方式"}},[s._v("#")]),s._v(" 手动方式")]),s._v(" "),n("h2",{attrs:{id:"docker-方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-方式"}},[s._v("#")]),s._v(" docker 方式")]),s._v(" "),n("p",[s._v("1.docker 拉取 redis 镜像\n// 这里我没有指定版本 就默认拉取最新的用的人最多的稳定版")]),s._v(" "),n("p",[s._v("docker pull redis")]),s._v(" "),n("p",[s._v("2.redis 配置目录创建与设置\nmkdir -p /mydata/redis/conf")]),s._v(" "),n("p",[s._v("touch /mydata/redis/conf/redis.conf")]),s._v(" "),n("p",[s._v('3.设置 redis 持久化 aof---选做\necho "appendonly yes" >> /mydata/redis/conf/redis.conf')]),s._v(" "),n("p",[s._v("4.docker 启动 redis\ndocker run -p 6379:6379 --name redis -v /mydata/redis/data:/data -v /mydata/redis/conf/redis.conf:/etc/redis/redis.conf --restart=always --network common-network -d redis redis-server /etc/redis/redis.conf")]),s._v(" "),n("p",[s._v("5.进入 redis 容器内部 进行查看或者操作\ndocker exec -it redis /bin/bash 默认进入 data 文件夹")]),s._v(" "),n("p",[s._v("cd /etc/redis/\n// 连接 redis")]),s._v(" "),n("p",[s._v("docker exec -it redis redis-cli")]),s._v(" "),n("p",[s._v("6.重启 redis\ndocker restart redis")]),s._v(" "),n("p",[s._v("7.设置 redis 跟随 docker 启动\ndocker update redis --restart=always")]),s._v(" "),n("h1",{attrs:{id:"常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://www.redis.com.cn/commands.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.redis.com.cn/commands.html"),n("OutboundLink")],1)]),s._v(" "),n("ul",[n("li",[s._v("redis-server -v 查看版本")]),s._v(" "),n("li",[s._v("set/mset")]),s._v(" "),n("li",[s._v("get/mget")]),s._v(" "),n("li",[s._v("hset hget hdel 哈希操作")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("hset user:1 name jack age "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\nhset user:2 name lucy age "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\nhget user:1 name\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ul",[n("li",[s._v("lpush 和 lrange 列表操作")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("lpush citys nj js shanghai hangzhou wuhan\nlpush citys nanchang\nLRANGE citys "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nanchang"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wuhan"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hangzhou"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shanghai"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("ul",[n("li",[s._v("sadd、smembers、srem 集合操作")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("sadd fruit apple banana\nSMEMBERS fruit\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"banana"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"apple"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("ul",[n("li",[s._v("zadd、 zrang、zrem 有序集合，分数用于排序")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("zadd grade "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v(" jack "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("90")]),s._v(" xiaoming\nZRANGE grade "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" withscores\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ul",[n("li",[s._v("禁用 keys *")]),s._v(" "),n("li",[s._v("exists key 判断 key 是否存在")]),s._v(" "),n("li",[s._v("incr key")]),s._v(" "),n("li",[s._v("append key value 追加字符串")]),s._v(" "),n("li",[s._v("strlen key 每个汉子占 3 个字节")]),s._v(" "),n("li")]),s._v(" "),n("h1",{attrs:{id:"最佳实践"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[s._v("#")]),s._v(" 最佳实践")]),s._v(" "),n("ol",[n("li",[s._v("缩短键值对的存储长度；")]),s._v(" "),n("li",[s._v("使用  lazy free（延迟删除）特性；")]),s._v(" "),n("li",[s._v("设置键值的过期时间；")]),s._v(" "),n("li",[s._v("禁用长耗时的查询命令；")]),s._v(" "),n("li",[s._v("使用 slowlog 优化耗时命令；")]),s._v(" "),n("li",[s._v("使用 Pipeline 批量操作数据；")]),s._v(" "),n("li",[s._v("避免大量数据同时失效；")]),s._v(" "),n("li",[s._v("客户端使用优化；")]),s._v(" "),n("li",[s._v("限制 Redis 内存大小；")]),s._v(" "),n("li",[s._v("使用物理机而非虚拟机安装 Redis 服务；")]),s._v(" "),n("li",[s._v("检查数据持久化策略；")]),s._v(" "),n("li",[s._v("禁用 THP 特性；")]),s._v(" "),n("li",[s._v("使用分布式架构来增加读写速度。")])]),s._v(" "),n("p",[n("a",{attrs:{href:"https://juejin.cn/post/6844904101151506446",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://juejin.cn/post/6844904101151506446"),n("OutboundLink")],1)]),s._v(" "),n("h1",{attrs:{id:"常用-redis-conf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用-redis-conf"}},[s._v("#")]),s._v(" 常用 redis.conf")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("bind")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注释掉这部分，否则只能本地访问")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认redis不是以后台进程的方式启动，如果需要在后台运行，需要将这个值设置成yes")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认no，改为yes意为以守护进程方式启动，可后台运行，除非kill进程，改为yes会使配置文件方式启动redis失败")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以后台方式启动的时候，redis会写入默认的进程文件/var/run/redis.pid")]),s._v("\ndaemonize no\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认yes，开启保护模式，限制为本地访问")]),s._v("\nprotected-mode no\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis启动的进程路径")]),s._v("\npidfile/var/run/redis.pid\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动进程端口号，默认6379，可以改")]),s._v("\nport "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n\ntcp-backlog "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("511")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置redis监听到的ip地址，可以是一个也可以多个，这里我注释掉了")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#bind 127.0.0.110.254.3.42")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis的sock路径")]),s._v("\nunixsocket/tmp/redis.sock\nunixsocketperm "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 超时时间")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#指定TCP连接是否为长连接,"侦探"信号有server端维护。默认为0.表示禁用')]),s._v("\ntcp-keepalive "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志级别，log 等级分为4 级，debug,verbose,notice, 和warning。生产环境下一般开启notice")]),s._v("\nloglevel notice\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志文件地址")]),s._v("\nlogfile"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/redis/logs/redis.log"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置数据库的个数，可以使用SELECT 命令来切换数据库。默认使用的数据库是0号库。默认16个库")]),s._v("\ndatabases "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# RDB方式的持久化是通过快照（snapshotting）完成的，当符合一定条件时Redis会自动将内存中的所有数据进行快照并存储在硬盘上。进行快照的条件可以由用户在配置文件中自定义，由两个参数构成：时间和改动的键的个数。当在指定的时间内被更改的键的个数大于指定的数值时就会进行快照。RDB是Redis默认采用的持久化方式，在配置文件中已经预置了3个条件：")]),s._v("\nsave "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("900")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 900秒内有至少1个键被更改则进行快照")]),s._v("\nsave "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 300秒内有至少10个键被更改则进行快照")]),s._v("\nsave "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 60秒内有至少10000个键被更改则进行快照")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 持久化数据存储目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" /usr/local/redis/data\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 当持久化出现错误时，是否依然继续进行工作，是否终止所有的客户端write请求。默认设置"yes"表示终止，一旦snapshot数据保存故障，那么此server为只读服务。如果为"no"，那么此次snapshot将失败，但下一次snapshot不会受到影响，不过如果出现故障,数据只能恢复到"最近一个成功点"')]),s._v("\nstop-writes-on-bgsave-error no\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在进行数据镜像备份时，是否启用rdb文件压缩手段，默认为yes。压缩可能需要额外的cpu开支，不过这能够有效的减小rdb文件的大，有利于存储/备份/传输/数据恢复")]),s._v("\nrdbcompression "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# checksum文件检测，读取写入的时候rdb文件checksum，会损失一些性能")]),s._v("\nrdbchecksum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#镜像备份文件的文件名，默认为dump.rdb")]),s._v("\ndbfilename dump.rdb\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#当主master服务器挂机或主从复制在进行时，是否依然可以允许客户访问可能过期的数据。在"yes"情况下,slave继续向客户端提供只读服务,有可能此时的数据已经过期；在"no"情况下，任何向此server发送的数据请求服务(包括客户端和此server的slave)都将被告知"error"')]),s._v("\nslave-serve-stale-data "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果是slave库，只允许只读，不允许修改")]),s._v("\nslave-read-only "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# slave与master的连接,是否禁用TCPnodelay选项。"yes"表示禁用,那么socket通讯中数据将会以packet方式发送(packet大小受到socket buffer限制)。可以提高socket通讯的效率(tcp交互次数),但是小数据将会被buffer,不会被立即发送,对于接受者可能存在延迟。"no"表示开启tcp nodelay选项,任何数据都会被立即发送,及时性较好,但是效率较低，建议设为no，在高并发或者主从有大量操作的情况下，设置为yes')]),s._v("\nrepl-disable-tcp-nodelay no\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 适用Sentinel模块(unstable,M-S集群管理和监控),需要额外的配置文件支持。slave的权重值,默认100.当master失效后,Sentinel将会从slave列表中找到权重值最低(>0)的slave,并提升为master。如果权重值为0,表示此slave为"观察者",不参与master选举')]),s._v("\nslave-priority "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 限制同时连接的客户数量。当连接数超过这个值时，redis 将不再接收其他连接请求，客户端尝试连接时将收到error 信息。默认为10000，要考虑系统文件描述符限制，不宜过大，浪费文件描述符，具体多少根据具体情况而定")]),s._v("\nmaxclients "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# redis-cache所能使用的最大内存(bytes),默认为0,表示"无限制",最终由OS物理内存大小决定(如果物理内存不足,有可能会使用swap)。此值尽量不要超过机器的物理内存尺寸,从性能和实施的角度考虑,可以为物理内存3/4。此配置需要和"maxmemory-policy"配合使用,当redis中内存数据达到maxmemory时,触发"清除策略"。在"内存不足"时,任何write操作(比如set,lpush等)都会触发"清除策略"的执行。在实际环境中,建议redis的所有物理机器的硬件配置保持一致(内存一致),同时确保master/slave中"maxmemory""policy"配置一致。')]),s._v("\nmaxmemory "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 内存过期策略，内存不足"时,数据清除策略,默认为"volatile-lru"。')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# volatile-lru  ->对"过期集合"中的数据采取LRU(近期最少使用)算法.如果对key使用"expire"指令指定了过期时间,那么此key将会被添加到"过期集合"中。将已经过期/LRU的数据优先移除.如果"过期集合"中全部移除仍不能满足内存需求,将OOM.')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# allkeys-lru ->对所有的数据,采用LRU算法")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# volatile-random ->对"过期集合"中的数据采取"随即选取"算法,并移除选中的K-V,直到"内存足够"为止. 如果如果"过期集合"中全部移除全部移除仍不能满足,将OOM')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# allkeys-random ->对所有的数据,采取"随机选取"算法,并移除选中的K-V,直到"内存足够"为止')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# volatile-ttl ->对"过期集合"中的数据采取TTL算法(最小存活时间),移除即将过期的数据.')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# noeviction ->不做任何干扰操作,直接返回OOM异常")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 另外，如果数据的过期不会对"应用系统"带来异常,且系统中write操作比较密集,建议采取"allkeys-lru"')]),s._v("\nmaxmemory-policy volatile-lru\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认值5，上面LRU和最小TTL策略并非严谨的策略，而是大约估算的方式，因此可以选择取样值以便检查")]),s._v("\nmaxmemory-samples "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认情况下，redis 会在后台异步的把数据库镜像备份到磁盘，但是该备份是非常耗时的，而且备份也不能很频繁。所以redis 提供了另外一种更加高效的数据库备份及灾难恢复方式。开启append only 模式之后，redis 会把所接收到的每一次写操作请求都追加到appendonly.aof 文件中，当redis 重新启动时，会从该文件恢复出之前的状态。但是这样会造成appendonly.aof 文件过大，所以redis 还支持了BGREWRITEAOF 指令，对appendonly.aof 进行重新整理。如果不经常进行数据迁移操作，推荐生产环境下的做法为关闭镜像，开启appendonly.aof，同时可以选择在访问较少的时间每天对appendonly.aof 进行重写一次。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 另外，对master机器,主要负责写，建议使用AOF,对于slave,主要负责读，挑选出1-2台开启AOF，其余的建议关闭")]),s._v("\nappendonly "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# aof文件名字，默认为appendonly.aof")]),s._v("\nappendfilename "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"appendonly.aof"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置对appendonly.aof 文件进行同步的频率。always表示每次有写操作都进行同步，everysec 表示对写操作进行累积，每秒同步一次。no不主动fsync，由OS自己来完成。这个需要根据实际业务场景进行配置")]),s._v("\nappendfsync everysec\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 在aof rewrite期间,是否对aof新记录的append暂缓使用文件同步策略,主要考虑磁盘IO开支和请求阻塞时间。默认为no,表示"不暂缓",新的aof记录仍然会被立即同步')]),s._v("\nno-appendfsync-on-rewrite no\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当Aof log增长超过指定比例时，重写logfile，设置为0表示不自动重写Aof 日志，重写是为了使aof体积保持最小，而确保保存最完整的数据。")]),s._v("\nauto-aof-rewrite-percentage "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 触发aof rewrite的最小文件尺寸")]),s._v("\nauto-aof-rewrite-min-size 64mb\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# lua脚本执行的最大时间，单位毫秒")]),s._v("\nlua-time-limit "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 慢日志记录，单位微妙，10000就是10毫秒值，如果操作时间超过此值,将会把command信息"记录"起来.(内存,非文件)。其中"操作时间"不包括网络IO开支,只包括请求达到server后进行"内存实施"的时间."0"表示记录全部操作')]),s._v("\nslowlog-log-slower-than "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# "慢操作日志"保留的最大条数,"记录"将会被队列化,如果超过了此长度,旧记录将会被移除。可以通过"SLOWLOG<subcommand> args"查看慢记录的信息(SLOWLOG get 10,SLOWLOG reset)')]),s._v("\nslowlog-max-len "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v("\nnotify-keyspace-events "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# hash类型的数据结构在编码上可以使用ziplist和hashtable。ziplist的特点就是文件存储(以及内存存储)所需的空间较小,在内容较小时,性能和hashtable几乎一样.因此redis对hash类型默认采取ziplist。如果hash中条目的条目个数或者value长度达到阀值,将会被重构为hashtable。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个参数指的是ziplist中允许存储的最大条目个数，，默认为512，建议为128")]),s._v("\nhash-max-ziplist-entries "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ziplist中允许条目value值最大字节数，默认为64，建议为1024")]),s._v("\nhash-max-ziplist-value "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同上")]),s._v("\nlist-max-ziplist-entries "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v("\nlist-max-ziplist-value "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# intset中允许保存的最大条目个数,如果达到阀值,intset将会被重构为hashtable")]),s._v("\nset-max-intset-entries "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# zset为有序集合,有2中编码类型:ziplist,skiplist。因为"排序"将会消耗额外的性能,当zset中数据较多时,将会被重构为skiplist。')]),s._v("\nzset-max-ziplist-entries "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# zset中允许条目value值最大字节数，默认为64，建议为1024")]),s._v("\nzset-max-ziplist-value "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否开启顶层数据结构的rehash功能,如果内存允许,请开启。rehash能够很大程度上提高K-V存取的效率")]),s._v("\nactiverehashing "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 客户端buffer控制。在客户端与server进行的交互中,每个连接都会与一个buffer关联,此buffer用来队列化等待被client接受的响应信息。如果client不能及时的消费响应信息,那么buffer将会被不断积压而给server带来内存压力.如果buffer中积压的数据达到阀值,将会导致连接被关闭,buffer被移除。")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# buffer控制类型包括:normal -> 普通连接；slave->与slave之间的连接；pubsub ->pub/sub类型连接，此类型的连接，往往会产生此种问题;因为pub端会密集的发布消息,但是sub端可能消费不足.指令格式:client-output-buffer-limit <class> <hard><soft><seconds>",其中hard表示buffer最大值,一旦达到阀值将立即关闭连接;soft表示"容忍值",它和seconds配合,如果buffer值超过soft且持续时间达到了seconds,也将立即关闭连接,如果超过了soft但是在seconds之后，buffer数据小于了soft,连接将会被保留.其中hard和soft都设置为0,则表示禁用buffer控制.通常hard值大于soft.')]),s._v("\nclient-output-buffer-limitnormal "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nclient-output-buffer-limitslave 256mb 64mb "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("\nclient-output-buffer-limitpubsub 32mb 8mb "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# Redis server执行后台任务的频率,默认为10,此值越大表示redis对"间歇性task"的执行次数越频繁(次数/秒)。"间歇性task"包括"过期集合"检测、关闭"空闲超时"的连接等,此值必须大于0且小于500。此值过小就意味着更多的cpu周期消耗,后台task被轮询的次数更频繁。此值过大意味着"内存敏感"性较差。建议采用默认值。')]),s._v("\nhz "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当一个child在重写AOF文件的时候，如果aof-rewrite-incremental-fsync值为yes生效，那么这个文件会以每次32M数据的来被同步，这大量新增提交到磁盘是有用的，并且能避免高峰延迟。")]),s._v("\naof-rewrite-incremental-fsync "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br"),n("span",{staticClass:"line-number"},[s._v("106")]),n("br"),n("span",{staticClass:"line-number"},[s._v("107")]),n("br"),n("span",{staticClass:"line-number"},[s._v("108")]),n("br"),n("span",{staticClass:"line-number"},[s._v("109")]),n("br"),n("span",{staticClass:"line-number"},[s._v("110")]),n("br"),n("span",{staticClass:"line-number"},[s._v("111")]),n("br"),n("span",{staticClass:"line-number"},[s._v("112")]),n("br"),n("span",{staticClass:"line-number"},[s._v("113")]),n("br"),n("span",{staticClass:"line-number"},[s._v("114")]),n("br"),n("span",{staticClass:"line-number"},[s._v("115")]),n("br"),n("span",{staticClass:"line-number"},[s._v("116")]),n("br"),n("span",{staticClass:"line-number"},[s._v("117")]),n("br"),n("span",{staticClass:"line-number"},[s._v("118")]),n("br"),n("span",{staticClass:"line-number"},[s._v("119")]),n("br"),n("span",{staticClass:"line-number"},[s._v("120")]),n("br"),n("span",{staticClass:"line-number"},[s._v("121")]),n("br"),n("span",{staticClass:"line-number"},[s._v("122")]),n("br"),n("span",{staticClass:"line-number"},[s._v("123")]),n("br"),n("span",{staticClass:"line-number"},[s._v("124")]),n("br"),n("span",{staticClass:"line-number"},[s._v("125")]),n("br"),n("span",{staticClass:"line-number"},[s._v("126")]),n("br"),n("span",{staticClass:"line-number"},[s._v("127")]),n("br"),n("span",{staticClass:"line-number"},[s._v("128")]),n("br"),n("span",{staticClass:"line-number"},[s._v("129")]),n("br"),n("span",{staticClass:"line-number"},[s._v("130")]),n("br"),n("span",{staticClass:"line-number"},[s._v("131")]),n("br"),n("span",{staticClass:"line-number"},[s._v("132")]),n("br"),n("span",{staticClass:"line-number"},[s._v("133")]),n("br"),n("span",{staticClass:"line-number"},[s._v("134")]),n("br"),n("span",{staticClass:"line-number"},[s._v("135")]),n("br"),n("span",{staticClass:"line-number"},[s._v("136")]),n("br"),n("span",{staticClass:"line-number"},[s._v("137")]),n("br"),n("span",{staticClass:"line-number"},[s._v("138")]),n("br"),n("span",{staticClass:"line-number"},[s._v("139")]),n("br"),n("span",{staticClass:"line-number"},[s._v("140")]),n("br"),n("span",{staticClass:"line-number"},[s._v("141")]),n("br"),n("span",{staticClass:"line-number"},[s._v("142")]),n("br"),n("span",{staticClass:"line-number"},[s._v("143")]),n("br"),n("span",{staticClass:"line-number"},[s._v("144")]),n("br"),n("span",{staticClass:"line-number"},[s._v("145")]),n("br"),n("span",{staticClass:"line-number"},[s._v("146")]),n("br"),n("span",{staticClass:"line-number"},[s._v("147")]),n("br"),n("span",{staticClass:"line-number"},[s._v("148")]),n("br"),n("span",{staticClass:"line-number"},[s._v("149")]),n("br"),n("span",{staticClass:"line-number"},[s._v("150")]),n("br"),n("span",{staticClass:"line-number"},[s._v("151")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);