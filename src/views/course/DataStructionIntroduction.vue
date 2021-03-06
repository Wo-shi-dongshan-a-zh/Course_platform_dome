<template>
  <div>
    <h1 style="text-align: center">数据结构简介</h1>
    <div>{{introduction}}</div>
  </div>
</template>

<script>
export default {
  name: "DataStructionIntroduction",
  data(){
    return{
      introduction:'数据结构是计算机科学与技术专业的核心课程之一，属于专业基础课，是一门理论与实践相结合的课程。\n' +
          '\n' +
          '        数据结构课程最早由计算机系朱儒荣教授于1980开出，由朱老师负责组建了数据结构课题组。西安电子科技大学是国内最早开设该课程的高等院校之一。随着信息技术的发展，数据结构课程不仅是计算机科学与技术专业必修的核心课，同时也是电子工程、信息工程等专业的重要选修课程。\n' +
          '\n' +
          '        在该课程建立之初，使用的是Horiwitz所著的英文原版教材《Fundamental of Data Structure》。1983年，课题组在朱儒荣教授的带领下，广泛参阅了大量的国外文献，自编了《数据结构》教材和《数据结构实验指导书》，该教材曾获校级优秀教材奖，对课程的顺利实施起到了有力的促进作用。从1987年开始，在教育部的提倡下，开始采用严蔚敏等编著的《数据结构》(PASCAL版本)教材，由我们课程组编写的《数据结构实验指导书》一直使用到1999年。\n' +
          '\n' +
          '        数据结构课程组历来都非常重视师资队伍的培养，先后有徐学洲、邱士伟、武波、王若梅、雷咏梅、霍红卫、方敏等加入课程组。涌现了一批师德高尚、教学能力突出的教师，20余年的教学实施过程中不断新教师加入，逐步形成了一个知识与年龄结构合理的授课团队。由于全体老师的努力，该课程于1996年被评选为校级一类课程。\n' +
          '\n' +
          '        从2000年开始，本课程改用清华大学出版社出版，严蔚敏、吴伟民编著的《数据结构》(C语言版本)。该教材内容完整，配套辅助教学材料丰富，自出版以来被国内绝大多数高等学校所采用。2008年，课程组由王卫东牵头出版了教材《数据结构与算法》，作为共同教材使用至今，有力促进了课程的进一步开展。\n' +
          '\n' +
          '        数据结构课程最早普遍采用板书讲授的传统方式。这种教学方式适合于讲授课程中的抽象理论部分。随着电化教学的深入发展，数据结构课程组也开始思考教学方法与手段的改革。20世纪90年代中期开始，该课程的部分教学实践中逐步引入了幻灯片、算法仿真程序、多媒体课件、网页课件等现代化教学素材，这种新颖的教学手段改善了课程的教学效果、提高了学生的学习兴趣。传统教学方法和多媒体教学手段的结合在注重课程理论教学的基础上，突出了该课程实践性强的特点，使得该课程的教学水平上了一个新的台阶。\n' +
          '\n' +
          '        经过20余年的教学实践，目前，数据结构课程已经形成了一套完整的教学体系，它包括：（1）高水平的教材，配套完整的实验教材；（2）一支年龄结构和知识结构合理的教学梯队，一套完整成熟的教学手段和方法；（3）反映现代化教学水平的多媒体课件和初步网络教学环境。\n' +
          '\n' +
          '本课程的主要特色\n' +
          '1．坚持教学与研究并重，不断改革教学内容\n' +
          '\n' +
          '        课程组注重将当前重要研究成果吸收消化，并在“数据结构”课程教学中得到体现。数据结构与算法研究是计算机科学的核心。近年来在数据结构与算法领域取得了大量重要突破。课程组成员研究了2000年科学杂志发表的文章“Top 10 scientific algorithms”，经过消化吸收，将这些内容融入课堂教学中。在数据结构的教学与研究方面作了有益的探索。表现在以图论作为模型，利用数据结构中的Dijkstra算法，MST算法，Shortest-path算法，DFS算法、BFS算法解决Internet搜索、路由中的一些典型问题。这些问题以深入浅出的方式，将理论与实践结合。以Internet上成功的搜索引擎Google为例,剖析Google中使用的数据结构及算法，使得学生更好地理解线性表、树和图数据结构，以及排序算法、查找算法和压缩算法(比较Huffman和LZW压缩算法)在其中的成功应用，加强了学生对于理论的理解，以及将所学理论知识综合应用于实际问题的认识。\n' +
          '\n' +
          '2．重视理论教学与实践教学的有机统一\n' +
          '\n' +
          '        实现理论教学的抽象性和具体应用的实践性的有机统一。在教学之初就使学生建立起“数据结构课程的哲学来源于实际问题”的理念。例如：在介绍图论的有关搜索内容时，从Internet网络的构成入手，以Internet网搜索引擎Google为例，说明DFS和BFS在解决实际问题时的应用，使得学生体会到所学知识“从实践中来、再用到实践中去”的重要性。以每年一度的“ACM国际大学生程序设计大赛”为契机，培养尖子学生的实践能力和创新能力。数据结构课程组的教师担任了程序设计大赛教练的重任，在对尖子学生的培养上，努力将数据结构和算法的基础理论与实际编程和解决问题的能力相结合，收到了良好效果。近几年来，我校在ACM国际大学生程序设计竞赛中的成绩不断突破，历获亚洲区预选赛金、银、铜奖等多项优异成绩。\n' +
          '\n' +
          '3．积极探索多媒体和网络化教学手段\n' +
          '\n' +
          '        时代在发展，教育也必须不断创新。随着计算机多媒体和网络技术的深入发展，现代教学手段不断向多媒体和网络化的方向迈进。数据结构课程组的教师充分利用自己的专业优势，积极利用多媒体技术和网络技术来促进课程建设。课程组成员十分注重多媒体教学素材的制作，每个主讲教师都制作了自己的电子教案，还有一些教师充分利用了网上多媒体素材和资源来促进教学。利用本科生毕业设计的机会，指导学生制作了一些高质量的算法演示软件和动画。同时，一些教师建立了个人网页，在互联网上建立教学园地，充分利用网络化教育带来的便利来改善教学环境和教学效果。\n' +
          '\n' +
          '　\n' +
          '\n' +
          '　\n' +
          'Copyright © 2011 西安电子科技大学计算机学院\n' +
          '数据结构课程组'
    }
  },
  created() {

  }
}
</script>

<style scoped>

</style>