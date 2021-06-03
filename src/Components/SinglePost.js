import React from "react";
import "../dist/css/SinglePost.css";
import { MdDeleteForever, MdEdit } from "react-icons/md";

function SinglePost() {
  return (
    <div className="singlepost">
      <div className="singlepost__wrap">
        <img
          src="/images/singlepost.png"
          alt="single_img"
          className="singlepost__img"
        />
        <h1 className="singlepost__title">
          Lorem ipsum dolor sit amet.
          <div className="singlepost__title__edit">
            <MdEdit className="singlepost__title__icon" />
            <MdDeleteForever className="singlepost__title__icon" />
          </div>
        </h1>
        <div className="singlepost__info">
          <span className="singlepost__info__author">
            Author: <b>James</b>
          </span>
          <span className="singlepost__info__date">1hr ago</span>
        </div>
        <p className="singlepost__info__content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
          omnis non, nostrum, sed at voluptates, odio a incidunt inventore culpa
          expedita recusandae tempora nulla nisi. Nostrum illum quo architecto
          beatae vero voluptates culpa, provident, quidem asperiores eaque,
          minima voluptas non nisi fugit a pariatur doloremque consequuntur
          doloribus corrupti explicabo ab consequatur possimus. Impedit earum
          dolorum perspiciatis autem voluptates et, eius odit, aliquid eligendi
          ea laborum corporis! Non ullam eius neque vel tempora mollitia ea
          reprehenderit sint ducimus minima quisquam quam fuga iure, aut
          quibusdam officia, quidem ipsum repudiandae facere aspernatur enim a
          fugit! Eum quis quae ipsam aliquid error, odio perspiciatis minus sunt
          quidem veritatis aliquam consequatur amet doloribus tenetur ex
          incidunt delectus autem ut culpa nisi, iure illo inventore enim
          deleniti? Delectus tempore, blanditiis, atque voluptatum temporibus ad
          sed perferendis repellendus earum nesciunt iure quos distinctio fugit
          at alias ratione optio dolores? Optio fugit, nostrum ad mollitia
          similique fuga quo ducimus debitis porro modi nam vel. Aspernatur
          dolorum numquam ea atque distinctio optio harum, voluptate expedita in
          similique quas ipsum laborum voluptatibus iure laboriosam repudiandae
          labore ducimus animi repellat illum molestiae sunt totam impedit
          recusandae. Autem expedita nesciunt velit non nam, deleniti laboriosam
          labore ut, eos beatae consequuntur distinctio minus, obcaecati nihil
          repellendus minima error aliquid enim rem iste asperiores numquam!
          Debitis aliquid neque delectus magni veniam ipsa ipsum atque nam?
          Repudiandae, sint voluptatibus dolorem sed molestiae nam rerum
          quisquam possimus, reiciendis a eius soluta magni error perspiciatis
          quam esse quas ullam quos! Possimus modi ipsum veniam, nisi quo
          explicabo vero libero, corrupti eum dignissimos soluta rem optio
          praesentium animi numquam reprehenderit illum quisquam perspiciatis
          odio dolorum quibusdam fugiat officia. Dolorum perspiciatis dolores
          asperiores eius optio aspernatur temporibus magnam totam enim ut
          quaerat recusandae deserunt impedit aperiam at laudantium animi
          voluptates eaque, voluptatibus ex quia. Eligendi nulla in nostrum
          aperiam illo voluptatem maxime suscipit sunt iusto, esse fugiat ut
          veniam placeat soluta itaque dolorum facere deleniti vero minus!
          Corporis, aperiam ipsum. Voluptate, odio recusandae quos iure incidunt
          cum facilis itaque a, quia accusamus inventore debitis similique
          quidem eaque deserunt exercitationem? Excepturi et inventore facere
          dignissimos facilis adipisci, harum cum rerum architecto labore
          voluptatum porro aliquam corrupti ullam atque sint cumque voluptates
          ipsum quam eaque, recusandae quas dolore velit. Pariatur, odio porro!
          Delectus dignissimos vel magnam. Molestias, animi, vitae consectetur
          veritatis quibusdam rem asperiores sed perspiciatis, corporis ipsa
          earum sequi. Repellendus earum dolor incidunt corporis numquam nulla
          beatae sed voluptatem, assumenda delectus debitis quam eaque saepe
          officia exercitationem ad doloribus accusamus impedit obcaecati
          nostrum. Necessitatibus laborum, similique explicabo ipsa magnam
          voluptatem velit dolores. Quaerat ullam cum, praesentium illo aliquid
          voluptatem ea quis laudantium, architecto accusantium impedit
          temporibus culpa! Iure, officiis impedit vel molestias commodi
          corrupti nostrum ipsum iste magnam quos veritatis aspernatur porro
          nesciunt consectetur ex eligendi possimus maiores praesentium? Totam
          sequi earum numquam assumenda dolore rerum dolorum debitis quis ad
          maxime suscipit esse, ab, ratione pariatur amet minima, animi optio
          velit eligendi hic quia. Magnam aperiam commodi alias, totam
          voluptates non quas voluptatum voluptate fuga. Repudiandae explicabo
          nihil facere?
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
