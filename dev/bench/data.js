window.BENCHMARK_DATA = {
  "lastUpdate": 1618993813456,
  "repoUrl": "https://github.com/ImmemorConsultrixContrarie/frunk",
  "entries": {
    "Frunk Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "lloydmeta@users.noreply.github.com",
            "name": "Lloyd",
            "username": "lloydmeta"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6367d15a88899388507157831bd442a61e3ae801",
          "message": "Merge branch 'master' into master",
          "timestamp": "2021-04-02T15:37:53+09:00",
          "tree_id": "ae308792bbee8ebbb513752e4ab72af9f41568c0",
          "url": "https://github.com/ImmemorConsultrixContrarie/frunk/commit/6367d15a88899388507157831bd442a61e3ae801"
        },
        "date": 1617345681281,
        "tool": "cargo",
        "benches": [
          {
            "name": "empty",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "generic_conversion",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "creating_hlist",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "creating_tuple2",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_append",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_into_hlist_pat_match",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_into_tuple2",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_into_tuple2_match",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_mapping_consuming",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_mapping_non_consuming",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "big_from_24fields",
            "value": 71,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "big_from_25fields",
            "value": 88,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "big_transform_from_24fields",
            "value": 76,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "big_transform_from_25fields",
            "value": 94,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "labelled_conversion",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "name",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sculpted_conversion",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "combine_all_i32",
            "value": 26,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "std_add_all_i32",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "lens_path_read_mut",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "lens_path_read_ref",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "lens_path_read_value",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "normal_path_read_mut",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "normal_path_read_ref",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "normal_path_read_value",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "combine_i32",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "combine_option_string",
            "value": 52,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "std_add_i32",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "std_add_option_string",
            "value": 72,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "manual_deep_from",
            "value": 841,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "transmogrify_deep",
            "value": 759,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "adding_result_to_validated_all_bad",
            "value": 346,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "adding_result_to_validated_all_good",
            "value": 47,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "adding_result_to_validated_mixed",
            "value": 158,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "adding_validateds",
            "value": 27,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "error_result_into_validated",
            "value": 43,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ok_result_into_validated",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "validated_to_result",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "somewhat.fluffy@gmail.com",
            "name": "ImmConCon",
            "username": "ImmemorConsultrixContrarie"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1ecf416700ef7b33730f9c8a7049082e55963ecf",
          "message": "Merge branch 'master' into master",
          "timestamp": "2021-04-02T10:09:28+02:00",
          "tree_id": "65c1bcc5d83925a041011bd4e9e6de05594728bd",
          "url": "https://github.com/ImmemorConsultrixContrarie/frunk/commit/1ecf416700ef7b33730f9c8a7049082e55963ecf"
        },
        "date": 1617351211619,
        "tool": "cargo",
        "benches": [
          {
            "name": "empty",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "generic_conversion",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "creating_hlist",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "creating_tuple2",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_append",
            "value": 4,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_into_hlist_pat_match",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_into_tuple2",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_into_tuple2_match",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_mapping_consuming",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_mapping_non_consuming",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "big_from_24fields",
            "value": 58,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "big_from_25fields",
            "value": 73,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "big_transform_from_24fields",
            "value": 56,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "big_transform_from_25fields",
            "value": 76,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "labelled_conversion",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "name",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sculpted_conversion",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "combine_all_i32",
            "value": 24,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "std_add_all_i32",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "lens_path_read_mut",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "lens_path_read_ref",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "lens_path_read_value",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "normal_path_read_mut",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "normal_path_read_ref",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "normal_path_read_value",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "combine_i32",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "combine_option_string",
            "value": 41,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "std_add_i32",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "std_add_option_string",
            "value": 56,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "manual_deep_from",
            "value": 673,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "transmogrify_deep",
            "value": 643,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "adding_result_to_validated_all_bad",
            "value": 274,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "adding_result_to_validated_all_good",
            "value": 35,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "adding_result_to_validated_mixed",
            "value": 123,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "adding_validateds",
            "value": 20,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "error_result_into_validated",
            "value": 33,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "ok_result_into_validated",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "validated_to_result",
            "value": 3,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "somewhat.fluffy@gmail.com",
            "name": "Erik",
            "username": "ImmemorConsultrixContrarie"
          },
          "committer": {
            "email": "somewhat.fluffy@gmail.com",
            "name": "Erik",
            "username": "ImmemorConsultrixContrarie"
          },
          "distinct": true,
          "id": "a9cb4d20e8a3a1141e40d3655cd63223034edd9a",
          "message": "Merge https://github.com/lloydmeta/frunk",
          "timestamp": "2021-04-17T14:48:01+02:00",
          "tree_id": "6564fad325d61c224c8725edb74db2935749bbd4",
          "url": "https://github.com/ImmemorConsultrixContrarie/frunk/commit/a9cb4d20e8a3a1141e40d3655cd63223034edd9a"
        },
        "date": 1618666027313,
        "tool": "cargo",
        "benches": [
          {
            "name": "empty",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "generic_conversion",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "creating_hlist",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "creating_tuple2",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_append",
            "value": 5,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_into_hlist_pat_match",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_into_tuple2",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_into_tuple2_match",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_mapping_consuming",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_mapping_non_consuming",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "big_from_24fields",
            "value": 77,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "big_from_25fields",
            "value": 96,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "big_transform_from_24fields",
            "value": 79,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "big_transform_from_25fields",
            "value": 89,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "labelled_conversion",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "name",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sculpted_conversion",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "combine_all_i32",
            "value": 25,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "std_add_all_i32",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "lens_path_read_mut",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "lens_path_read_ref",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "lens_path_read_value",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "normal_path_read_mut",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "normal_path_read_ref",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "normal_path_read_value",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "combine_i32",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "combine_option_string",
            "value": 52,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "std_add_i32",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "std_add_option_string",
            "value": 71,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "manual_deep_from",
            "value": 869,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "transmogrify_deep",
            "value": 770,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "adding_result_to_validated_all_bad",
            "value": 340,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "adding_result_to_validated_all_good",
            "value": 46,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "adding_result_to_validated_mixed",
            "value": 153,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "adding_validateds",
            "value": 27,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "error_result_into_validated",
            "value": 42,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ok_result_into_validated",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "validated_to_result",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "somewhat.fluffy@gmail.com",
            "name": "Erik",
            "username": "ImmemorConsultrixContrarie"
          },
          "committer": {
            "email": "somewhat.fluffy@gmail.com",
            "name": "Erik",
            "username": "ImmemorConsultrixContrarie"
          },
          "distinct": true,
          "id": "c2e17eed98262edc7f9d94e27b181a9c7e7a3248",
          "message": "Doc fix",
          "timestamp": "2021-04-17T15:25:56+02:00",
          "tree_id": "378858650b7cefef64086b9931dc2c10a37a0463",
          "url": "https://github.com/ImmemorConsultrixContrarie/frunk/commit/c2e17eed98262edc7f9d94e27b181a9c7e7a3248"
        },
        "date": 1618988859738,
        "tool": "cargo",
        "benches": [
          {
            "name": "empty",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "generic_conversion",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "creating_hlist",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "creating_tuple2",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_append",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_into_hlist_pat_match",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_into_tuple2",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_into_tuple2_match",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_mapping_consuming",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_mapping_non_consuming",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "big_from_24fields",
            "value": 62,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "big_from_25fields",
            "value": 80,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "big_transform_from_24fields",
            "value": 63,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "big_transform_from_25fields",
            "value": 84,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "labelled_conversion",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "name",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sculpted_conversion",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "combine_all_i32",
            "value": 27,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "std_add_all_i32",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "lens_path_read_mut",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "lens_path_read_ref",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "lens_path_read_value",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "normal_path_read_mut",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "normal_path_read_ref",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "normal_path_read_value",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "combine_i32",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "combine_option_string",
            "value": 51,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "std_add_i32",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "std_add_option_string",
            "value": 67,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "manual_deep_from",
            "value": 776,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "transmogrify_deep",
            "value": 699,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "adding_result_to_validated_all_bad",
            "value": 340,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "adding_result_to_validated_all_good",
            "value": 45,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "adding_result_to_validated_mixed",
            "value": 150,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "adding_validateds",
            "value": 26,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "error_result_into_validated",
            "value": 40,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ok_result_into_validated",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "validated_to_result",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "somewhat.fluffy@gmail.com",
            "name": "Erik",
            "username": "ImmemorConsultrixContrarie"
          },
          "committer": {
            "email": "somewhat.fluffy@gmail.com",
            "name": "Erik",
            "username": "ImmemorConsultrixContrarie"
          },
          "distinct": true,
          "id": "eee197a1f53e337dc74f345edf44a7513752ac8b",
          "message": "Swap `foldr` generics from `(T, Init)` to `(Init, T)`",
          "timestamp": "2021-04-21T10:13:24+02:00",
          "tree_id": "218f4775f1f8bd470bb8c4d21352da6d565523ec",
          "url": "https://github.com/ImmemorConsultrixContrarie/frunk/commit/eee197a1f53e337dc74f345edf44a7513752ac8b"
        },
        "date": 1618993512315,
        "tool": "cargo",
        "benches": [
          {
            "name": "empty",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "generic_conversion",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "creating_hlist",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "creating_tuple2",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_append",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_into_hlist_pat_match",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_into_tuple2",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_into_tuple2_match",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_mapping_consuming",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_mapping_non_consuming",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "big_from_24fields",
            "value": 65,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "big_from_25fields",
            "value": 81,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "big_transform_from_24fields",
            "value": 68,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "big_transform_from_25fields",
            "value": 77,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "labelled_conversion",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "name",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sculpted_conversion",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "combine_all_i32",
            "value": 26,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "std_add_all_i32",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "lens_path_read_mut",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "lens_path_read_ref",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "lens_path_read_value",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "normal_path_read_mut",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "normal_path_read_ref",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "normal_path_read_value",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "combine_i32",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "combine_option_string",
            "value": 47,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "std_add_i32",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "std_add_option_string",
            "value": 66,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "manual_deep_from",
            "value": 751,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "transmogrify_deep",
            "value": 672,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "adding_result_to_validated_all_bad",
            "value": 296,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "adding_result_to_validated_all_good",
            "value": 43,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "adding_result_to_validated_mixed",
            "value": 132,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "adding_validateds",
            "value": 24,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "error_result_into_validated",
            "value": 35,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "ok_result_into_validated",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "validated_to_result",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "somewhat.fluffy@gmail.com",
            "name": "Erik",
            "username": "ImmemorConsultrixContrarie"
          },
          "committer": {
            "email": "somewhat.fluffy@gmail.com",
            "name": "Erik",
            "username": "ImmemorConsultrixContrarie"
          },
          "distinct": true,
          "id": "e78cfb7e6cdb656aabfaac2d481d53afaa3e0c54",
          "message": "Swap `foldr` generics from `(T, Init)` to `(Init, T)`",
          "timestamp": "2021-04-21T10:24:51+02:00",
          "tree_id": "218f4775f1f8bd470bb8c4d21352da6d565523ec",
          "url": "https://github.com/ImmemorConsultrixContrarie/frunk/commit/e78cfb7e6cdb656aabfaac2d481d53afaa3e0c54"
        },
        "date": 1618993812142,
        "tool": "cargo",
        "benches": [
          {
            "name": "empty",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "generic_conversion",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "creating_hlist",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "creating_tuple2",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_append",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_into_hlist_pat_match",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_into_tuple2",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_into_tuple2_match",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_mapping_consuming",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_mapping_non_consuming",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "big_from_24fields",
            "value": 66,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "big_from_25fields",
            "value": 81,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "big_transform_from_24fields",
            "value": 62,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "big_transform_from_25fields",
            "value": 81,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "labelled_conversion",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "name",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sculpted_conversion",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "combine_all_i32",
            "value": 28,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "std_add_all_i32",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "lens_path_read_mut",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "lens_path_read_ref",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "lens_path_read_value",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "normal_path_read_mut",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "normal_path_read_ref",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "normal_path_read_value",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "combine_i32",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "combine_option_string",
            "value": 48,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "std_add_i32",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "std_add_option_string",
            "value": 67,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "manual_deep_from",
            "value": 805,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "transmogrify_deep",
            "value": 753,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "adding_result_to_validated_all_bad",
            "value": 320,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "adding_result_to_validated_all_good",
            "value": 46,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "adding_result_to_validated_mixed",
            "value": 149,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "adding_validateds",
            "value": 25,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "error_result_into_validated",
            "value": 37,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ok_result_into_validated",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "validated_to_result",
            "value": 4,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "lloydmeta@users.noreply.github.com",
            "name": "Lloyd",
            "username": "lloydmeta"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37e72109d337061d8abf66a5f471b480ecf68773",
          "message": "Merge branch 'master' into master",
          "timestamp": "2021-04-02T15:37:31+09:00",
          "tree_id": "5e8936287e80c195d59907f99f4c369d09ef0081",
          "url": "https://github.com/ImmemorConsultrixContrarie/frunk/commit/37e72109d337061d8abf66a5f471b480ecf68773"
        },
        "date": 1617345733708,
        "tool": "cargo",
        "benches": [
          {
            "name": "empty",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "generic_conversion",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "creating_hlist",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "creating_tuple2",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_append",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_into_hlist_pat_match",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_into_tuple2",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_into_tuple2_match",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_mapping_consuming",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "hlist_mapping_non_consuming",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "big_from_24fields",
            "value": 62,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "big_from_25fields",
            "value": 76,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "big_transform_from_24fields",
            "value": 61,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "big_transform_from_25fields",
            "value": 78,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "labelled_conversion",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "name",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sculpted_conversion",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "combine_all_i32",
            "value": 27,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "std_add_all_i32",
            "value": 3,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "lens_path_read_mut",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "lens_path_read_ref",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "lens_path_read_value",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "normal_path_read_mut",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "normal_path_read_ref",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "normal_path_read_value",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "combine_i32",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "combine_option_string",
            "value": 48,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "std_add_i32",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "std_add_option_string",
            "value": 62,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "manual_deep_from",
            "value": 772,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "transmogrify_deep",
            "value": 695,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "adding_result_to_validated_all_bad",
            "value": 328,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "adding_result_to_validated_all_good",
            "value": 44,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "adding_result_to_validated_mixed",
            "value": 141,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "adding_validateds",
            "value": 24,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "error_result_into_validated",
            "value": 35,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "ok_result_into_validated",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "validated_to_result",
            "value": 4,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}