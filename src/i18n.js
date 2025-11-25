import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    ko: {
        translation: {
            nav: {
                about: '소개',
                philosophy: '철학',
                services: '서비스',
                team: '팀',
                contact: '문의하기'
            },
            hero: {
                title: '스타트업의 성공을',
                titleHighlight: '함께 만듭니다',
                subtitle: '스타트업 투자/법률/인사/노무/PR 등 영역의 전문가 4명이 모인 Consulting Firm, 테트라 주식회사입니다.',
                description: '여러분과 함께 충분히 고민하고, 문제 해결을 위한 최적의 솔루션을 제공하도록, 테트라 모두가 노력하겠습니다.',
                note: '* 그리스어로 숫자 \'4\'를 뜻하는 \'Tetra\'로 Founding Partner 4명을 사명에 표현하였습니다.',
                cta: '문의하기'
            },
            philosophy: {
                title: '테트라의 시작',
                subtitle: '두 가지 의문에서 시작되었습니다',
                risk: {
                    number: '01',
                    title: 'Risk, 위기와 기회',
                    intro: '스타트업은 기존 산업을 새롭게 정의하고 관습에 도전하면서 폭발적인 성장을 이루어 냅니다.',
                    challenge: '때문에 창업자들은 매 순간 크고 작은 리스크와 어려움에 노출되어 있지만, 사업의 본질과 핵심에만 집중하기에도 창업자의 에너지는 항상 부족합니다.',
                    reality: '하지만 경직된 고용 제도, 전문 인력 채용에 대한 금전/시간적 부담 등 여러 이유로, 우선은 지금의 리소스로 당장의 문제 해결에 급급하게 됩니다.',
                    question: '신규 채용만이 유일한 해결 방법일까요? 왜 외부 전문가들은 비싸야만 할까요?'
                },
                unicorn: {
                    number: '02',
                    title: 'Unicorn, 창업자의 목표?',
                    intro: '최근까지 우리는 전설의 \'유니콘\'이 마치 현실에 존재하는 동물인 것처럼 지내 왔습니다.',
                    question: '왜 유니콘이 목표여야만 훌륭한 걸까요? 왜 유니콘이 되어야 하는 게 당연스러울까요? 과연 유니콘은 모두에게 올바른 목표일까요?'
                }
            },
            services: {
                title: '테트라의 문제 해결 방법',
                consulting: {
                    title: 'Consulting',
                    intro: '테트라는 스타트업의 고민을 함께합니다.',
                    approach: '대리인/외부인의 입장에서가 아닌, 여러분의 In-House & One Team으로 함께 문제 해결에 집중합니다.',
                    philosophy: '모든 일에 있어 목표 달성을 위해서는 충분한 시간과 에너지 투입이 필요충분조건이라고 생각합니다.',
                    method: '테트라는 여러분에게 충분한 시간과 노력을 쏟기 위해, 시간에 구속받는 Time Charge는 지양합니다.',
                    value: '금전적 보상 이상으로 세상을 바꾸는 여정을 함께하고 같이 성장하는 것에 테트라는 보람을 느낍니다.',
                    solution: '신규 인력 채용 대신, 각 분야의 전문가로 이루어진 테트라 팀이 다함께 여러분을 돕겠습니다.'
                },
                investment: {
                    title: 'Investment',
                    philosophy: '모두가 유니콘을 목표할 필요는 없습니다. 트렌드에 연연할 필요도 없습니다. 맹목적인 글로벌 시장 진출도 필수가 아닙니다.',
                    data: '대한민국 상장기업 중 약 85%가 시가총액 5천억원 미만이고, KOSDAQ 기업의 불과 3% 정도만이 시가총액 1조원 이상의 소위 \'유니콘\' 입니다.',
                    approach: '테트라는 맹목적인 성장이 아닌, 여러분 스스로의 목표 성취를 응원합니다.',
                    commitment: '여러분들의 긴 여정의 첫 시작부터 테트라가 함께 하겠습니다.'
                }
            },
            team: {
                title: 'Team',
                subtitle: '각 분야 전문가 4명의 파트너가 함께합니다',
                members: {
                    cho: {
                        name: '조융재',
                        role: 'Partner',
                        expertise: '투자사업'
                    },
                    park: {
                        name: '박소영',
                        role: 'Partner (변호사)',
                        expertise: '투자 · 인사노무'
                    },
                    yang: {
                        name: '양윤지',
                        role: 'Partner',
                        expertise: '투자 · 인사노무'
                    },
                    kim: {
                        name: '김경범',
                        role: 'Partner',
                        expertise: '투자 · 홍보PR'
                    }
                }
            },
            contact: {
                title: '함께 성장할 준비가 되셨나요?',
                subtitle: '테트라와 함께 스타트업의 성공을 만들어가세요',
                cta: '문의하기'
            },
            footer: {
                copyright: '© 2024 Tetra Corporation. All rights reserved.',
                company: '테트라 주식회사'
            }
        }
    },
    en: {
        translation: {
            nav: {
                about: 'About',
                philosophy: 'Philosophy',
                services: 'Services',
                team: 'Team',
                contact: 'Contact'
            },
            hero: {
                title: 'Building Success',
                titleHighlight: 'Together',
                subtitle: 'Tetra Corporation is a consulting firm of 4 experts in startup investment, legal, HR, labor, and PR.',
                description: 'We are committed to thinking deeply with you and providing optimal solutions for problem-solving.',
                note: '* "Tetra" means the number \'4\' in Greek, representing our 4 Founding Partners.',
                cta: 'Contact Us'
            },
            philosophy: {
                title: 'Our Beginning',
                subtitle: 'Started with two fundamental questions',
                risk: {
                    number: '01',
                    title: 'Risk, Crisis and Opportunity',
                    intro: 'Startups achieve explosive growth by redefining existing industries and challenging conventions.',
                    challenge: 'Therefore, founders are exposed to various risks and difficulties at every moment, but their energy is always insufficient to focus solely on the essence and core of the business.',
                    reality: 'However, due to rigid employment systems and financial/time burdens of hiring professionals, they often rush to solve immediate problems with current resources.',
                    question: 'Is hiring the only solution? Why must external experts be expensive?'
                },
                unicorn: {
                    number: '02',
                    title: 'Unicorn, The Founder\'s Goal?',
                    intro: 'Until recently, we have been living as if the legendary \'unicorn\' were a real animal.',
                    question: 'Why must being a unicorn be the goal to be excellent? Why should becoming a unicorn be natural? Is unicorn status the right goal for everyone?'
                }
            },
            services: {
                title: 'Our Solutions',
                consulting: {
                    title: 'Consulting',
                    intro: 'Tetra shares the concerns of startups.',
                    approach: 'We focus on solving problems together as your In-House & One Team, not as agents or outsiders.',
                    philosophy: 'We believe that sufficient time and energy investment is a necessary and sufficient condition for achieving goals.',
                    method: 'To dedicate sufficient time and effort to you, Tetra avoids time-constrained Time Charge.',
                    value: 'Beyond financial compensation, Tetra finds fulfillment in joining the journey to change the world and growing together.',
                    solution: 'Instead of hiring new personnel, the Tetra team of experts in each field will help you together.'
                },
                investment: {
                    title: 'Investment',
                    philosophy: 'Not everyone needs to aim for unicorn status. No need to obsess over trends. Blind global expansion is not mandatory.',
                    data: 'About 85% of Korean listed companies have a market cap below 500 billion won, and only about 3% of KOSDAQ companies are so-called \'unicorns\' with a market cap over 1 trillion won.',
                    approach: 'Tetra supports your own goal achievement, not blind growth.',
                    commitment: 'Tetra will be with you from the very beginning of your long journey.'
                }
            },
            team: {
                title: 'Team',
                subtitle: '4 expert partners working together in each field',
                members: {
                    cho: {
                        name: 'Yoongjae Cho',
                        role: 'Partner',
                        expertise: 'Investment'
                    },
                    park: {
                        name: 'Soyoung Park',
                        role: 'Partner (Attorney)',
                        expertise: 'Investment · HR'
                    },
                    yang: {
                        name: 'Yoonji Yang',
                        role: 'Partner',
                        expertise: 'Investment · HR'
                    },
                    kim: {
                        name: 'Kyungbum Kim',
                        role: 'Partner',
                        expertise: 'Investment · PR'
                    }
                }
            },
            contact: {
                title: 'Ready to Grow Together?',
                subtitle: 'Create startup success with Tetra',
                cta: 'Contact Us'
            },
            footer: {
                copyright: '© 2024 Tetra Corporation. All rights reserved.',
                company: 'Tetra Corporation'
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ko',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
