package picstory.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import picstory.backend.repository.MemberRepository;
import picstory.backend.repository.PostRepository;
import picstory.backend.repository.TagRepository;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class TagService {
    private final TagRepository tagRepository;
    private final MemberRepository memberRepository;
    private final PostRepository postRepository;

    private static final String LOGIN_MEMBER_ID="LOGIN_MEMBER_ID";
}
