import React from 'react';
import '../profile/profile.css';

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
        <img src="https://s3-alpha-sig.figma.com/img/9f8e/b981/09649af00288910c8fa498e8c0b7f1e5?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mUJSEi2lgZbmvJ98RR3Es4ckbNs57VRYE354uBsdv6RKksa1CiN3vi-cGqEcJ4AO6~nsAnURgTykQU-pk9Bl5b4Ti4L5XUlE-If11cWQjnD~KF~KCRsdmTs6o9EKEr2CIsXddabY0KsonXNbg7wjMgGonONbiLU7JA8HarKuAJiqEomf3~yTUVIpumSnC6eP81jZXJkDaS8QKNA2Sl5ejz0NXRBCUF1S4AsXkk76NVPTRFcpQna7dT3MKH6y2SgDKEStNOnuUnzCCJE~VrpBGte9KCd9duxEfJ2ffqooBQO8sS9t1cywga06fXF7rJAAMf4f7TFksFv2GREYuKIjVw__" alt="User Image" />
        <div>
          <div className="username">Walid Guzeih</div>
          <div className="tag">@walid_0012</div>
        </div>
      </div>
      <img className="photo" src="https://s3-alpha-sig.figma.com/img/c363/cb74/e7d82ba84bc431bb5231e060d4afbd1b?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fuQRrR726gHBT0xlXbdhD8r1K58HFNEbGaKQ3ejg160S13bo1PBYEmreEtKzNFL0X-vcv5itreWJT-zt10DqI2tnD7xMx9desLF359P8BibMfjt754zj3CwtYNCSsQGIMc0xYMXDdU4T0OcIZx2UxrUc9sdBaNXXpZn1OiX2OnRLYOu1CDAVdWqqKbaXEYyrPWdsaynTNaNNvoa3AK7KNnuLICpIb~Nix771RYv2J2UtPB6RX8gOjla6NwispqGk0-kG09gFJqASJn7U04ym-NU3ArRhltHwLfeIJzPQpSueY8ys-kRjbkamcjY8BpzDgCL-PQ5NTD4reHWFgzq00Q__" alt="Post Image" />
      <div className="actions">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
      <textarea className="comment-input" placeholder="Write a comment..."></textarea>
    </div>


    <div className="post">
      <div className="user">
        <img src="https://s3-alpha-sig.figma.com/img/9f8e/b981/09649af00288910c8fa498e8c0b7f1e5?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mUJSEi2lgZbmvJ98RR3Es4ckbNs57VRYE354uBsdv6RKksa1CiN3vi-cGqEcJ4AO6~nsAnURgTykQU-pk9Bl5b4Ti4L5XUlE-If11cWQjnD~KF~KCRsdmTs6o9EKEr2CIsXddabY0KsonXNbg7wjMgGonONbiLU7JA8HarKuAJiqEomf3~yTUVIpumSnC6eP81jZXJkDaS8QKNA2Sl5ejz0NXRBCUF1S4AsXkk76NVPTRFcpQna7dT3MKH6y2SgDKEStNOnuUnzCCJE~VrpBGte9KCd9duxEfJ2ffqooBQO8sS9t1cywga06fXF7rJAAMf4f7TFksFv2GREYuKIjVw__" alt="User Image" />
        <div>
          <div className="username">Walid Guzeih</div>
          <div className="tag">@walid_0012</div>
        </div>
      </div>
      <img className="photo" src="https://s3-alpha-sig.figma.com/img/b51c/567f/e5bf95dec918540fb8a9d86bfe3de8ae?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KtSuYa8HOlo7dTbVbcxRuQe~ga12hTBuIGiJ4yDnuHoZNT2iUkfZ8s-Ptl8ZJ-YPfc~AZFJMPEa515oiRauhvkCfGhTUcJ1kq3lnHuOYSsZbRcd8AzIohaNdr1X5QqvEp7GFVUm7hhVhV6dozkDrCmpqU8YsRwLCTZ6enrGc308C~LAy7I6LSx1CfIPpRVhTNDYt4ZmIKJ46AE0mZFwvf-Dro1XqLT2hT~9nQwgaMk5li3MRzvqI66GBBOVODvqPct4mimZlyPube-JD~mvo~fxBLnAZpavuQbDyc7b6XcUH13ODrm4VAkPR~Hz3VcAizev-8fI7zHbXJD-XfHFVnw__" alt="Post Image" />
      <div className="actions">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
      <textarea className="comment-input" placeholder="Write a comment..."></textarea>
    </div>

    <div className='groupes'>
  <div className='groupes-header'>
    <div className='title'>My Groupes</div>
    <select className="form-select" aria-label="Disabled select example" disabled>
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>

  <div className='grp-container'>
    <div className='grp1'>
      <img className='img-grp1' src='' alt='Group 1' />
      <p className='name'>Group 1 Name</p>
      <p className='view'>Group 1 View</p>
      <button className='btn-grp1'>View</button>
    </div>

    <div className='grp2'>
      <img className='img-grp2' src='' alt='Group 2' />
      <p className='name'>Group 2 Name</p>
      <p className='view'>Group 2 View</p>
      <button className='btn-grp2'>View</button>
    </div>

    <div className='grp3'>
      <img className='img-grp3' src='' alt='Group 3' />
      <p className='name'>Group 3 Name</p>
      <p className='view'>Group 3 View</p>
      <button className='btn-grp3'>View</button>
    </div>
  </div>

  <button className='btn-see-all' style={{ color: 'rgba(108, 93, 211, 1)' }}>See All Groupes</button>
</div>



      </div>

    

    
  );
}

export default Profile;
