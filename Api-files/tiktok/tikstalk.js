exports.name = "/s4b1k/tikstalk"; exports.index =  async (req, res, next) => {
  var user = req.query.username;

  if (!user) return res.json({ error: "»𝙰𝚙𝚒 𝚄𝚜𝚎𝚐𝚎 𝙼𝚎𝚝𝚑𝚘𝚍:${api-link}/s4b1k/tikstalk?username={query}\n𝙾𝚠𝚗𝚎𝚛:𝐒𝐀𝐈𝐌𝐔𝐌 𝐒𝐀𝐁𝐈𝐊 (𝐒𝟒𝐁𝟏𝐊)" });

  var axios = require("axios");

  axios({
    method: "post",

    url: `${global.config.tiktok}/api/user/info?unique_id=@`,

    data: {
      unique_id: user,
    },
  })
    .then(function (response) {
      var data = response.data.data;

      console.log(data);

      return res.json({
        id: data.user.id,

        nickname: data.user.uniqueId,

        username: data.user.nickname,

        avatarLarger: data.user.avatarLarger,

        signature: data.user.signature,

        secUid: data.user.secUid,

        relation: data.user.relation,

        bioLink: data.user.bioLink,

        videoCount: data.stats.videoCount,

        followingCount: data.stats.followingCount,

        followerCount: data.stats.followerCount,

        heartCount: data.stats.heartCount,

        diggCount: data.stats.diggCount,
      });
    })

    .catch(function (error) {
      return res.json({ error });
    });
};