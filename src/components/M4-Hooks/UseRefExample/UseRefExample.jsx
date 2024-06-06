// https://youtu.be/CX2EypZi0aM?t=595
// кейс - использование рефов для привязки к эллементу

// https://youtu.be/CX2EypZi0aM?t=1077
// кейс - использование рефов для привязки к значению

import { useState, useRef, useEffect } from 'react';

const formStyle = {
  display: 'grid',
  width: 320,
  gap: 8,
  padding: 8,
  border: '1px solid black',
};

export default function UseRefExample() {
  const [val, setVal] = useState(1);
  const formRef = useRef();
  const refValue = useRef(val);

  useEffect(() => {
    console.log('refValue', refValue.current);
    console.log('stateVal', val);
  });

  // const [isBtnPressed, setIsBtnPressed] = useState(false);

  console.log('1formRef', formRef);

  const handleClick = () => {
    // setIsBtnPressed(true);
    const data = formRef.current.getBoundingClientRect();
    window.scrollTo({ top: data.top, behavior: 'smooth' });
  };

  return (
    <>
      <div>
        <button onClick={() => setVal(val + 1)}>{refValue.current}</button>
      </div>
      <div>
        <button onClick={handleClick}>Shedule a coaching session</button>
      </div>

      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dicta
          rerum harum et dignissimos possimus cumque, inventore odio eius
          expedita, itaque placeat debitis deserunt doloribus odit quos
          asperiores eos sint non velit, aliquam unde. Enim pariatur delectus
          voluptatem totam perferendis quis quia in labore, officia accusamus
          inventore, nobis earum ratione veritatis debitis excepturi odio?
          Cumque et voluptas ipsa nesciunt numquam? Voluptates delectus illo
          enim odio autem vel maxime quibusdam quas ullam magni maiores ipsa,
          laboriosam pariatur animi in ab molestias quis deleniti nesciunt
          corrupti, hic unde necessitatibus nobis veniam. Eaque consequuntur
          molestiae, reiciendis adipisci alias rem temporibus, quod voluptates
          officia, assumenda quis. Repellendus, laudantium voluptatem eos at
          tenetur omnis esse doloribus veritatis ea eaque repellat alias nam?
          Culpa dolore fugit, quaerat numquam unde doloremque! Consequuntur est
          magni repudiandae error quo unde, ex accusantium laborum reiciendis
          ipsa nobis! Cumque architecto facere sunt fugiat mollitia excepturi.
          Esse deserunt ut sequi voluptatibus deleniti rerum dolorem consequatur
          tempore, ipsum aperiam, error, vel consequuntur dicta iste autem
          laboriosam incidunt dolores ea doloribus impedit quos aspernatur quod
          suscipit porro! Officiis quia nostrum nihil, pariatur labore, iusto,
          voluptatum quisquam voluptate quas libero quasi eius repudiandae ullam
          tempore quibusdam fugit? Ullam fugiat error laboriosam? Facere odit
          totam in deleniti ut voluptates illum iusto nihil quae provident
          magnam ipsa enim sed ea blanditiis animi non, laboriosam debitis earum
          neque obcaecati. Neque ipsum id explicabo minus vero dolorum tenetur
          pariatur quos. Repellendus, beatae? Rem nemo alias velit quia
          voluptates illum itaque recusandae optio distinctio tenetur beatae,
          ducimus eaque unde? Libero sequi temporibus recusandae impedit sint
          reprehenderit quaerat molestias doloribus cupiditate ab. Aliquam
          recusandae necessitatibus veniam quisquam maiores earum debitis neque
          asperiores officia voluptate perspiciatis odit nam sapiente velit,
          eveniet eius dignissimos exercitationem iusto et. Laborum, corrupti!
          Dignissimos, at eius soluta ipsa harum ducimus repudiandae ullam
          dolorum fugiat quod accusamus quibusdam similique, nemo, sit quos
          error sed corporis? Nulla id perferendis ipsa sunt! Exercitationem
          dignissimos tenetur vero voluptas laboriosam nesciunt repudiandae
          dolorum quis sunt, quia nulla molestiae soluta, hic voluptatibus
          saepe? Iste porro mollitia nisi est eius quibusdam, similique alias
          ullam animi at architecto sed dolores obcaecati aut quod! Perspiciatis
          reiciendis at natus quam quas eaque provident atque, eligendi
          laboriosam praesentium nihil illo iusto tempore in qui autem quos non
          vel exercitationem dignissimos similique quaerat. Quas enim sint
          perferendis eius dolores corporis at inventore, iure sunt distinctio
          dolorem praesentium quae totam necessitatibus alias placeat. Corrupti
          recusandae harum reiciendis assumenda perferendis rerum omnis eligendi
          iusto qui ut placeat et id facilis culpa laudantium quis eius, non
          atque alias libero totam officia eveniet eum dicta! Dolor tenetur sit
          inventore! Tempora, labore nihil! Odit sequi iusto error et nulla
          aperiam ea ipsum architecto consequuntur quibusdam, consequatur
          laboriosam itaque, reprehenderit consectetur delectus quae excepturi
          optio blanditiis expedita quas repellat alias. Tempore non esse eaque
          ea optio magni repellendus nam tempora placeat harum iusto laudantium
          fugit dolores aspernatur libero alias exercitationem a delectus,
          quisquam voluptate vero nisi consectetur rem? Dicta, ut! Repudiandae
          dolorum ex dicta, dolore eum quia sint natus rem reiciendis, dolores
          repellat alias dignissimos maiores! Voluptates exercitationem,
          repellendus quidem illo consectetur expedita modi veniam recusandae
          commodi voluptas consequuntur assumenda quam sequi atque ratione
          cupiditate accusamus enim nemo? Dolores perferendis neque itaque natus
          dolorum totam ratione dignissimos. Facilis ea corrupti, asperiores
          vitae iusto eum tempore pariatur voluptas odio! Vitae corrupti
          praesentium quam animi iste dicta nulla, assumenda modi nam temporibus
          officia dolores ab autem hic perspiciatis omnis quos neque? Explicabo,
          ad! A modi quas sint nostrum non? Tenetur aut repellat inventore
          deserunt sit possimus quos? Eveniet facilis harum nesciunt iusto
          praesentium, reiciendis quasi corporis doloremque quaerat neque eum,
          aut pariatur aspernatur magni sunt. Eligendi itaque laborum harum a,
          obcaecati id magnam molestiae tempore voluptatem corrupti. Dolorum
          similique fugit dicta quidem inventore voluptatibus eaque nobis
          numquam quasi, soluta velit repudiandae enim sapiente incidunt
          officiis ullam laboriosam obcaecati ut? Doloribus quam cupiditate
          quisquam ea praesentium harum expedita a eum officiis totam! Ab,
          nihil. Voluptatibus ipsa quisquam voluptas tempora alias sequi atque
          dolor, autem ad dolores eos necessitatibus vero quos corporis,
          praesentium eum pariatur dignissimos mollitia quidem distinctio?
          Temporibus accusamus nesciunt quis dolorem quae accusantium. Nemo,
          obcaecati. Doloribus vitae eum molestiae nulla reiciendis. Culpa
          aliquam impedit neque id eaque animi ad pariatur, cupiditate veritatis
          nulla aspernatur incidunt delectus!
        </p>
      </div>

      <form ref={formRef} style={formStyle}>
        <input type="email" placeholder="Your email" />
        <button>Shedule now!</button>
      </form>

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          sapiente deserunt ipsa esse veniam explicabo quaerat voluptate quidem
          nostrum optio veritatis, quis porro blanditiis, nihil quia temporibus
          dicta quibusdam, nemo iure non cumque! Laborum pariatur inventore
          quis, rem accusamus magni illo perferendis voluptate fuga magnam
          dolorem dignissimos enim repellat asperiores illum nam ab molestiae
          nesciunt? In cumque harum eum quo voluptatum commodi voluptatibus rem
          culpa placeat reiciendis officia temporibus optio ab odio nihil fuga
          animi illum ratione rerum molestiae facere blanditiis, beatae quis.
          Rem corporis consequuntur debitis, obcaecati possimus vel non
          doloremque expedita quaerat accusantium neque placeat pariatur dolore
          odit repudiandae sapiente a officia veritatis deleniti. Nulla,
          corrupti. Explicabo sunt perspiciatis fugit, harum voluptatem, amet,
          ea inventore repellendus assumenda asperiores dignissimos doloribus!
          Sapiente, sequi nulla possimus quia corrupti inventore nihil magni
          commodi libero debitis nesciunt adipisci dolore iste est cumque? Quae
          maiores aut asperiores ratione distinctio impedit a sequi? Deserunt
          quis dolore dolor perspiciatis ipsam obcaecati! Sequi illo porro autem
          consequuntur, unde quas natus eaque eligendi ab et esse aliquid
          tempore maiores fuga repudiandae culpa ipsum asperiores hic ad? Nam
          ipsa eaque, dignissimos exercitationem, a consequatur pariatur impedit
          ut alias magnam omnis voluptatem ipsum neque, molestias debitis nihil
          ipsam eum! Aliquid odit dolorum cumque reprehenderit ullam culpa non,
          nesciunt blanditiis sint exercitationem voluptas aliquam nam delectus
          rem. Officia soluta mollitia dolorum reiciendis maxime ullam odio ea
          quibusdam modi. Doloremque officiis nulla repudiandae ducimus! Officia
          a nemo voluptates velit distinctio quidem sapiente labore eveniet
          autem praesentium quaerat harum magnam ipsum earum numquam maxime
          natus sequi unde doloribus suscipit obcaecati, mollitia, ab quo
          repellat. Quam, earum eum architecto expedita assumenda dolores,
          voluptatum autem libero vero, ad ipsa est amet cupiditate perspiciatis
          porro reprehenderit natus. Temporibus sint nesciunt alias natus sit
          ipsum debitis saepe quidem suscipit, expedita sequi consequatur
          voluptatum nostrum soluta animi officiis deserunt. Est omnis veritatis
          exercitationem odit reprehenderit dolorum. Maiores quidem obcaecati,
          mollitia quas nihil in blanditiis deserunt itaque odio provident
          eligendi adipisci quis dolorem ducimus cupiditate, sunt ab
          perspiciatis. Possimus id modi culpa ipsum, aspernatur non ullam
          exercitationem officia eius explicabo porro placeat accusantium, omnis
          magni recusandae ut quia ea commodi consequuntur molestias architecto
          sequi. Totam quibusdam corrupti error mollitia blanditiis saepe fugiat
          ab quidem sit voluptas voluptatem deserunt unde autem, dolore laborum
          culpa hic assumenda neque rem quam officiis natus? In ducimus quisquam
          quam quas illum cum libero inventore odio cupiditate! Doloribus
          tenetur ad praesentium est itaque magnam!
        </p>
      </div>
    </>
  );
}
