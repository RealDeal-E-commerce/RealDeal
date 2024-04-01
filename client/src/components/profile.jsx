import React from 'react';
import '../css/profile.css';

function Profile() {
  return (
    <div className="container">
      <div className="container-lg">
        <img src="https://s3-alpha-sig.figma.com/img/6262/ff08/c2cdd4f8b04caadb548542f98fd4c2f2?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DOAOhAg0Ls~jm6UiqYYpjq-R92qnBZTxoF~2GvJJFPLfDK9YQCNJMId19aT2V6diniTTRJY4aGYoxX5cL7d7D5rWSRE5akp8goFZeSDaCMKAsCKRKfghlMXE1ayO9b6Wgd-Q9ofUfFyQdyMKF5BFKmdtv~fLWQDtUcebaLLVGnJNHCNiNZpWzPXhpC2JNAXUH2xQK0ZGOf07mxeGiaUN5ioTw5RZ1KJMDV1c~0PYlQEU3milLZqB1-dCjUosG112o0iFxsQ~vSSFk~hz-oKyY8aPXqxkgm1kNRxbBE49RBEAvr6IoeLvqaT8qPYp4JHqnXgzltuFhBqhCsyua9UMQw__" className="img-fluid" alt="..." />
      </div>
        <button className="btn-01" type="submit"></button>

      <div className="profile-edit">
        <img src="https://s3-alpha-sig.figma.com/img/9f8e/b981/09649af00288910c8fa498e8c0b7f1e5?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mUJSEi2lgZbmvJ98RR3Es4ckbNs57VRYE354uBsdv6RKksa1CiN3vi-cGqEcJ4AO6~nsAnURgTykQU-pk9Bl5b4Ti4L5XUlE-If11cWQjnD~KF~KCRsdmTs6o9EKEr2CIsXddabY0KsonXNbg7wjMgGonONbiLU7JA8HarKuAJiqEomf3~yTUVIpumSnC6eP81jZXJkDaS8QKNA2Sl5ejz0NXRBCUF1S4AsXkk76NVPTRFcpQna7dT3MKH6y2SgDKEStNOnuUnzCCJE~VrpBGte9KCd9duxEfJ2ffqooBQO8sS9t1cywga06fXF7rJAAMf4f7TFksFv2GREYuKIjVw__" className="img" alt="..." />
        <button type="button" className="btn2"></button>
      </div>  

      <div className="container-3">
        <h1>Walid Guezih</h1>
        <h4>@walid_0012</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, consectetur purus amet, accumsan nulla. Ut urna placerat morbi cursus pulvinar nunc adipiscing. Tortor, consectetur purus amet, accumsan nulla. Ut urna placerat morbi cursus pulvinar nunc adipiscing.</p>
        <button type="button" className="btn active">Edit profile</button>
      </div>

      <div className="card" style={{ width: '18rem' }}>
        <div className="row">
          <div className="col-6">
          <h1 style={{ color: 'black', fontSize: '1.2rem' }}>Photos</h1>
          </div>
          <div className="col-6 d-flex justify-content-end">
          <button type="button" className="btn" data-bs-toggle="button" style={{ color: 'rgba(108, 93, 211, 1)' }}>See all photos</button>
          </div>
        </div>  

        <div className="container text-center">
          <div className="row">
            <div className="col">
              <img src="https://s3-alpha-sig.figma.com/img/66a6/4993/4dd26b5218c111c538688e3afd407696?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h~9wJ4PHAfcqN-dyoduvVkxXJo2n-RA8qve7YTrRsRUUByGABIM87pZt8yNdGFYqMrxLPwC-Vd~G4IlAmxR5ms0ENOQQXtkOP1G-4JCgk5pxmiGFhgyd3kQiYRvArLvdQlw6cxVhrVvgY8eKyVUa-aPKKBz6eT0gkJiPXwlQj86e7r1O-HhFJBIW7G1MenWBFuLLJEpgNOFIOy~v7FaeYbew8cuhIT85eAmIEoAEE-MI~4l2m2BVNSrfc6CIKuImUo-QkV2klTQn~izDy7l3pklEAUapXPQN~woFuHbGQufw2MgRd509ah8pEWsGePBB7xeb21ZH8wrvEcsdWlCrkQ__" className="img-thumbnail" alt="..." />
            </div>
            <div className="col">
              <img src="https://s3-alpha-sig.figma.com/img/66a6/4993/4dd26b5218c111c538688e3afd407696?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h~9wJ4PHAfcqN-dyoduvVkxXJo2n-RA8qve7YTrRsRUUByGABIM87pZt8yNdGFYqMrxLPwC-Vd~G4IlAmxR5ms0ENOQQXtkOP1G-4JCgk5pxmiGFhgyd3kQiYRvArLvdQlw6cxVhrVvgY8eKyVUa-aPKKBz6eT0gkJiPXwlQj86e7r1O-HhFJBIW7G1MenWBFuLLJEpgNOFIOy~v7FaeYbew8cuhIT85eAmIEoAEE-MI~4l2m2BVNSrfc6CIKuImUo-QkV2klTQn~izDy7l3pklEAUapXPQN~woFuHbGQufw2MgRd509ah8pEWsGePBB7xeb21ZH8wrvEcsdWlCrkQ__" className="img-thumbnail" alt="..." />
            </div>
            <div className="col">
              <img src="https://s3-alpha-sig.figma.com/img/66a6/4993/4dd26b5218c111c538688e3afd407696?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h~9wJ4PHAfcqN-dyoduvVkxXJo2n-RA8qve7YTrRsRUUByGABIM87pZt8yNdGFYqMrxLPwC-Vd~G4IlAmxR5ms0ENOQQXtkOP1G-4JCgk5pxmiGFhgyd3kQiYRvArLvdQlw6cxVhrVvgY8eKyVUa-aPKKBz6eT0gkJiPXwlQj86e7r1O-HhFJBIW7G1MenWBFuLLJEpgNOFIOy~v7FaeYbew8cuhIT85eAmIEoAEE-MI~4l2m2BVNSrfc6CIKuImUo-QkV2klTQn~izDy7l3pklEAUapXPQN~woFuHbGQufw2MgRd509ah8pEWsGePBB7xeb21ZH8wrvEcsdWlCrkQ__" className="img-thumbnail" alt="..." />
            </div>
         </div>
      </div>

      </div>
      

      <div className="post">
      <div className="user">
        <img src="https://s3-alpha-sig.figma.com/img/9f8e/b981/09649af00288910c8fa498e8c0b7f1e5?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mUJSEi2lgZbmvJ98RR3Es4ckbNs57VRYE354uBsdv6RKksa1CiN3vi-cGqEcJ4AO6~nsAnURgTykQU-pk9Bl5b4Ti4L5XUlE-If11cWQjnD~KF~KCRsdmTs6o9EKEr2CIsXddabY0KsonXNbg7wjMgGonONbiLU7JA8HarKuAJiqEomf3~yTUVIpumSnC6eP81jZXJkDaS8QKNA2Sl5ejz0NXRBCUF1S4AsXkk76NVPTRFcpQna7dT3MKH6y2SgDKEStNOnuUnzCCJE~VrpBGte9KCd9duxEfJ2ffqooBQO8sS9t1cywga06fXF7rJAAMf4f7TFksFv2GREYuKIjVw__" alt="User img" />
        <div>
          <div className="username">Walid Guzeih</div>
          <div className="tag">@walid_0012</div>
        </div>
      </div>
      <img className="photo" src="https://s3-alpha-sig.figma.com/img/c363/cb74/e7d82ba84bc431bb5231e060d4afbd1b?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fuQRrR726gHBT0xlXbdhD8r1K58HFNEbGaKQ3ejg160S13bo1PBYEmreEtKzNFL0X-vcv5itreWJT-zt10DqI2tnD7xMx9desLF359P8BibMfjt754zj3CwtYNCSsQGIMc0xYMXDdU4T0OcIZx2UxrUc9sdBaNXXpZn1OiX2OnRLYOu1CDAVdWqqKbaXEYyrPWdsaynTNaNNvoa3AK7KNnuLICpIb~Nix771RYv2J2UtPB6RX8gOjla6NwispqGk0-kG09gFJqASJn7U04ym-NU3ArRhltHwLfeIJzPQpSueY8ys-kRjbkamcjY8BpzDgCL-PQ5NTD4reHWFgzq00Q__" alt="Post img" />
      <div className="actions">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
      <textarea className="comment-input" placeholder="Write a comment..."></textarea>
    </div>


    <div className="post">
      <div className="user">
        <img src="https://s3-alpha-sig.figma.com/img/9f8e/b981/09649af00288910c8fa498e8c0b7f1e5?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mUJSEi2lgZbmvJ98RR3Es4ckbNs57VRYE354uBsdv6RKksa1CiN3vi-cGqEcJ4AO6~nsAnURgTykQU-pk9Bl5b4Ti4L5XUlE-If11cWQjnD~KF~KCRsdmTs6o9EKEr2CIsXddabY0KsonXNbg7wjMgGonONbiLU7JA8HarKuAJiqEomf3~yTUVIpumSnC6eP81jZXJkDaS8QKNA2Sl5ejz0NXRBCUF1S4AsXkk76NVPTRFcpQna7dT3MKH6y2SgDKEStNOnuUnzCCJE~VrpBGte9KCd9duxEfJ2ffqooBQO8sS9t1cywga06fXF7rJAAMf4f7TFksFv2GREYuKIjVw__" alt="User img" />
        <div>
          <div className="username">Walid Guzeih</div>
          <div className="tag">@walid_0012</div>
        </div>
      </div>
      <img className="photo" src="https://s3-alpha-sig.figma.com/img/b51c/567f/e5bf95dec918540fb8a9d86bfe3de8ae?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KtSuYa8HOlo7dTbVbcxRuQe~ga12hTBuIGiJ4yDnuHoZNT2iUkfZ8s-Ptl8ZJ-YPfc~AZFJMPEa515oiRauhvkCfGhTUcJ1kq3lnHuOYSsZbRcd8AzIohaNdr1X5QqvEp7GFVUm7hhVhV6dozkDrCmpqU8YsRwLCTZ6enrGc308C~LAy7I6LSx1CfIPpRVhTNDYt4ZmIKJ46AE0mZFwvf-Dro1XqLT2hT~9nQwgaMk5li3MRzvqI66GBBOVODvqPct4mimZlyPube-JD~mvo~fxBLnAZpavuQbDyc7b6XcUH13ODrm4VAkPR~Hz3VcAizev-8fI7zHbXJD-XfHFVnw__" alt="Post img" />
      <div className="actions">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
      <textarea className="comment-input" placeholder="Write a comment..."></textarea>
    </div>


    <div class="frame">
  <div class='groupes'>
  <div className='groupes-header'>
    <h2 className='title'>My Groupes</h2>
    <select className="form-select" aria-label="Disabled select example" disabled>
      <option select>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>

  <div className='grp-container'>
    <div className='grp1'>
      <img className='img-grp1' alt='' src='https://s3-alpha-sig.figma.com/img/dbac/df43/ad865d79d09d456e595e6f2e33060422?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OfgRU4GRSsMIkamYzWWeSsObxq3f30JYAQyz8N-tasxkH7kAHIQ2BMQ-paCbLvoe58cNByaEmLwACTNKaxlCfydWl3LiYJz~nfB2ConzN5STfJxMOY2xBoJ8FFFp4-7T5NsB2sN6glHZ7xcfzfq52-Bc1CX1ZRGlCfFydw5Qib-al3AX~I0JMilPFeOpO-eevUtx~qALoG5jSzeeMtggsbcxyqP1t6ezqUW02oOVSZzH~ie1skWdXqwgOsbcx5P~K~5po29stYrrAqPFjsDtQkE6V4D9PDG~tFzfx4cX02Bh91PN1GM4UfPIjnEpX6FeGxhwpQP0Xc8xT6aTlk9auA__'  />
      <p className='name'>Zalando</p>
      <p className='view'>24k M</p>
      <button className='btn-grp1'>View</button>
    </div>

    <div className='grp2'>
      <img className='img-grp2' alt='' src='https://s3-alpha-sig.figma.com/img/f680/0697/0dcb96fe1a08d98a4ef82be39ed7a258?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MlLMN68y4Xx3uYYUqTKudiPwka0SQ5DlQ3uI8mgzfsTyen1LR03Uq7dcldCswTZIsy6KwAZxQ9wJg05e8UAxluPVHneVhGNxbsEYvqLTtx2Bq8jsjJ4ZbjBIGYZDP3~bmZjdB7FozxAfl4QwbQ6HpAV~XeNHgqUlu-UmU-XzKH~tngSBNztR-d0904-kpdVMl5LmvDkJ9fYO6HVUyJw9XFkHOogp683MXTb6vNcmmgz~h2IhIe3Q6iGaz~KjwB4~tQcDGGCKacinIrTpq0ziPTFadnljbuP8GzREbMjabS5YDWDxRr7x3w7~C2PqYyk-gXaBbqbd6NfnQWkXLjTZSA__'  />
      <p className='view'>Zara</p>
      <p className='view'>24k M</p>
      <button className='btn-grp2'>View</button>
    </div>

    <div className='grp3'>
      <img className='img-grp3' alt='' src='https://s3-alpha-sig.figma.com/img/9966/fb19/afab57c29962418f871c706f9b54eea8?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IervE21lt1Cs3zMWV1xZAtv9H072b8yqFB3w8oln7UK-a1VkCYp7snkrwrGuoP4CVf6jqmeiwcs5gyulmRamhUiEn38fFHQSgLbnmoBSERa-xE8PBH1UQYXDYGqW~g9uAWCdSI65UAktqF~KTKKhYfxD80~j48DhnR7yb6nQ8cSZ49Pmv3KYHioStk8~dLYwe9MzluZTCjPNJku4AIPoyUl5KS48Jn03iym6~mnydh0Rd~DreHeqAjbjMO5f9GOmpmfru~HKQnu2DiplHjdwIYBSBgmHVedxxIHAjzc00LxVuoJNvo5jHXxYdkOo01edAlWTRYIbpx4q1ahsI7ZQfA__' />
      <p className='name'>Cartier</p>
      <p className='view'>24k M</p>
      <button className='btn-grp3'>View</button>
    </div>
  </div>

  <button className='btn-see-all' style={{ color: 'rgba(108, 93, 211, 1)' }}>See All Groupes</button>
  </div>
</div>

    {/* <div className='groupes'>
  
</div> */}



      </div>

    

    
  );
}

export default Profile;
