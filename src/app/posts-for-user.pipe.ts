import { Pipe, PipeTransform } from '@angular/core';
import {PresentPosts} from './present-posts';

@Pipe({
  name: 'postsForUser'
})

// this pipe returns an array of posts that matches a specific user id
export class PostsForUserPipe implements PipeTransform {

  transform( postsList:PresentPosts[],userId: number):PresentPosts[]  {
     if (userId==0)
    {return postsList;}
    else
    {
     return postsList.filter(x=> x.postUserId==userId );

    }
  }

}
