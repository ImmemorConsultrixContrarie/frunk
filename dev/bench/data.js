window.BENCHMARK_DATA = {
  "lastUpdate": 1617345682167,
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
      }
    ]
  }
}