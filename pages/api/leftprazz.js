// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res
    .status(200)
    .json({
      datas: [
        { name: "Akhmad Prasetya Atmanegara", description: "lalalalal" },
        { name: "Akhmad Prasetya Atmanegara", description: "lalalalal" },
        { name: "Akhmad Prasetya Atmanegara", description: "lalalalal" },
        { name: "Akhmad Prasetya Atmanegara", description: "lalalalal" }
      ],
    });
}
